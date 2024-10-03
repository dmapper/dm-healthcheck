module.exports = function() {
  return function (req, res, next) {
    if (req.path === '/healthcheck') {
      if (res.headersSent) {
        console.warn('Attempted end response after headers were sent');
        next();
      } else {
        res.status(200).end();
      }
    } else {
      next();
    }
  }
}
