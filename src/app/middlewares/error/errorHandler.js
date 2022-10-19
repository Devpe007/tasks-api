// eslint-disable-next-line no-unused-vars
function errorHandler(error, request, response, next) {
  if (error instanceof Error) {
    return response.status(400).json({
      error: error.message,
    });
  };

  return response.status(500).json({
    status: 'error',
    message: `Internal server error - ${error}`,
  });
};

export default errorHandler;
