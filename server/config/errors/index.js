const err404 = (req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
}

const err500 = (req, res, next) => {
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}
  res.status(err.status || 500)
  res.render('error')
}

module.exports = {
  err404,
  err500
}