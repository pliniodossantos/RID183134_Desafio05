import AppError from './AppError.js';


export default class ErrorHandleMiddleware {
   static haddleError(
    error,
    _req,
    res,
    _next,
  ) {
    if (error instanceof AppError) {
      return res.status(error.statusCode).json({
        type: 'error',
        message: error.message,
      });
    }
    return res.status(500).json({
      type: 'error',
      message: 'Internal server error',
    });
  }
}