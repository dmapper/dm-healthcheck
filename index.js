module.exports = function (req, res, next) {
  if (req.path === '/healthcheck') {
    return res.send(200);
  }
  next();
}
