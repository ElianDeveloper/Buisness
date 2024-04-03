const jwt = require("jsonwebtoken");
const AppError = require("../errors/AppError");

const authenticate = (roles) => {
  return function (req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return next(new AppError("Permission denied1", 403));
    }

    const token = authHeader;

    try {
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

      if (roles.includes(decodedToken.role)) {
        req.userData = { userId: decodedToken.userId };
        next();
      } else {
        return next(new AppError("Permission denied2", 403));
      }
    } catch (error) {
      return next(new AppError("Permission denied3", 403));
    }
  };
};

module.exports = authenticate;
