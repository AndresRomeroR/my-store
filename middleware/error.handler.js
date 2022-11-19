function logErrors(err, req, res, next) { //este captura el error
  console.log('LogErrors');
  console.error(err);
  next(err);
}

function errorHandler(err, req, res, next) {
  console.log('ErrorHandler');  //aca envia el formato del error
  res.status(500).json({
    message: error.message,
    stack: error.stack,
  });
}

function boomErrorHandler(err, req, res, next) {
  if(err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  }
  next(err);
}

module.exports = { logErrors, errorHandler, boomErrorHandler }
