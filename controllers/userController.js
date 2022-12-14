const { User } = require("../models");

function format(user, includeToken) {
  const { id, usercode } = user;
  const formattedUser = {
    id,
    usercode,
  };

  if (includeToken) {
    formattedUser.accessToken = user.generateToken();
  }

  return formattedUser;
}

module.exports = {
  register: (req, res, next) => {
    User.register(req.body)
      .then(() => {
        res.json("Registrasi sukses");
      })
      .catch((err) => next(err));
  },
  login: (req, res) => {
    User.authenticate(req.body).then((user) => {
      res.json(format(user, true));
    });
  },
  whoami: (req, res) => {
    res.json(format(req.user, false));
  },
};
