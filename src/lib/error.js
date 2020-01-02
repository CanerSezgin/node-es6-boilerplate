export class ErrorHandler extends Error {
  /**
   *
   * @param {number} statusCode - HTTP Status Codes
   * @param {string} message - Error Message
   * @param {boolean} isOperational - Operational errors refer to situations where you understand what happened and the impact of it.
   */
  constructor(statusCode, message, isOperational) {
    super();
    Error.call(this);
    Error.captureStackTrace(this);
    this.statusCode = statusCode;
    this.message = message;
    this.isOperational = isOperational;
  }
}

// eslint-disable-next-line no-unused-vars
export const handleError = async (err, req, res, next) => {
  const { statusCode, message, isOperational } = err;
  return res.status(statusCode).json({
    status: "error",
    statusCode,
    message,
    isOperational,
    stack: err.stack
  });
};
