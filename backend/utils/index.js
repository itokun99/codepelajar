const responseSuccess = (response, data = null, message = 'Successfull!', statusCode = 200) => {
  response.status(statusCode);
  response.json({ status: true, message, data });
  response.end();
}

const responseError = (response, data = null, message = 'Bad Request!', statusCode = 400) => {
  response.status(statusCode);
  response.json({ status: false, message, data });
  response.end();
}


module.exports = {
  responseSuccess,
  responseError
}