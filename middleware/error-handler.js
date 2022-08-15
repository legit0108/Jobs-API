const { StatusCodes } = require('http-status-codes')
const errorHandlerMiddleware = (err, req, res, next) => {
  let customError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    message: err.message || 'Something went wrong try again later'
  }

  // if (err instanceof CustomAPIError) {
  //   return res.status(err.statusCode).json({message: err.message })
  // }

  if(err.code && err.code===11000){
    customError.message = `Duplicate value entered for ${Object.keys(err.keyValue)} field, please chose another value`
    customError.statusCode = 400
  }

  // return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ err })
  return res.status(customError.statusCode).json({message: customError.message})
}

module.exports = errorHandlerMiddleware
