const mongoose = require("mongoose");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const LocalStrategy = require("passport-local").Strategy;
const keys = require("../config/keys");
const User = require("../models/user");

module.exports = passport => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
      done(null, user);
    });
  });

  passport.use(
    new GoogleStrategy(
      {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: "/auth/google/callback",
        proxy: true
      },
      async (accessToken, refreshToken, profile, done) => {
        const existingUser = await User.findOne({ provider_id: profile.id });
        if (existingUser) {
          return done(null, existingUser);
        }
        const user = await new User({
          provider_id: profile.id,
          fname: profile.name.givenName,
          lname: profile.name.familyName,
          email: profile.emails[0].value,
          profile_pic: profile.photos[0].value,
          provider: "google"
        }).save();
        done(null, user);
      }
    )
  );

  passport.use(
    "local-signup",
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true
      },
      (req, email, password, done) => {
        process.nextTick(() => {
          User.findOne({ email: email }, (err, user) => {
            if (err) return done(err);
            if (user)
              return done(null, false, { message: "Email already in use." });
            else {
              var newUser = new User({
                fname: req.body.fname,
                lname: req.body.lname,
                email: email,
                provider: "local"
              });
              newUser.password = newUser.generateHash(password);
              newUser.save(err => {
                if (err) throw err;
                return done(null, newUser);
              });
            }
          });
        });
      }
    )
  );

  passport.use(
    "local-login",
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true
      },
      (req, email, password, done) => {
        User.findOne({ email: email }, (err, user) => {
          if (err) return done(err);
          if (!user) return done(null, false, { message: "User not found" });
          if (!user.validPassword(password))
            return done(null, false, { message: "Wrong password" });
          return done(null, user);
        });
      }
    )
  );
};
