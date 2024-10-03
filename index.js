module.exports = function() {
  return function (req, res, next) {
    if (req.path === '/healthcheck') {
      if (res.headersSent) {
        console.warn('Attempted end response after headers were sent');
        return next();
      } else {
        return res.status(200).end();
      }
    }
    next();
  }
}
