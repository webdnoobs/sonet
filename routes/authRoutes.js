module.exports = (app, passport) => {
  app.post(
    "/auth/signup",
    passport.authenticate("local-signup", {
      successRedirect: "/",
      failureFlash: true
    })
  );
  app.post(
    "/auth/login",
    passport.authenticate("local-login", {
      successRedirect: "/",
      failureFlash: true
    })
  );

  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );
  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      res.redirect("/");
    }
  );
  app.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });
  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};
