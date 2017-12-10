const User = require("../models/user");

module.exports = app => {
  app.get("/api/user_list", (req, res) => {
    User.find({}, (err, users) => {
      var userMap = {};
      users.forEach(user => {
        userMap[user._id] = user;
      });
      res.send(userMap);
    });
  });

  app.get("/api/friend_list", (req, res) => {
    console.log(req.user);
  });

  app.post("/api/add_friend", (req, res) => {
    console.log(req.body._id);
    User.findOneAndUpdate(
      { email: req.user.email },
      { $push: { friends: req.body._id } }
    );
  });
};
