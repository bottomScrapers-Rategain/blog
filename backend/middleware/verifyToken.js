const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  // Get the token from the request header or other appropriate place
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Authorization token is missing' });
  }

  jwt.verify(token, 'secret', (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Failed to authenticate token' });
    }

    // If token is valid, save the decoded data to the request object
    req.user = user;
    next(); // Continue to the next middleware or route handler
  });
};

module.exports = verifyToken;
