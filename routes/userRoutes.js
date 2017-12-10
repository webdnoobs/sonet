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
};
