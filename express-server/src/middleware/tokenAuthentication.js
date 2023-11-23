const jwt = require('jsonwebtoken');

const tokenAuthentication = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(401).json({ message: 'Authentication failed' });
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Authentication failed' });
    }
    req.user = decoded;
    next();
  });
}

module.exports = tokenAuthentication;