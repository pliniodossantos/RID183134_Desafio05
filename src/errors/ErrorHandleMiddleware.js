import AppError from './AppError.js';


export default class ErrorHandleMiddleware {
   static haddleError(
    error,
    _req,
    res,
    _next,
  ) {
    if (error instanceof AppError) {
      return res.status(error.status).json({
        type: 'error',
        mensagem: error.mensagem,
      });
    }
    return res.status(500).json({
      type: 'error',
      mensagem: 'Internal server error',
    });
  }
}