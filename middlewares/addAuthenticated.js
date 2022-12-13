const passport = require('../lib/passport');

module.exports = (req, res, next) => {
  passport.authenticate(
    "jwt",
    {
      session: false,
    },
    (err, user, info) => {
      if (err || !user) {
        req.isAuthenticated = () => false;
      } else {
        req.isAuthenticated = () => true;
        req.user = user;
      }

      return next();
    }
  )(req, res, next);
};