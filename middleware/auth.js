// middleware/auth.js
const auth = (req, res, next) => {
  // Simple mock auth — attach dummy user
  req.user = { id: 'user123', role: 'admin' };
  next();
};

module.exports = auth;
