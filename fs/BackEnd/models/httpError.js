class HttpError extends Error {
  constructor(message,errorCode) {
    // Add a message property calling constructor of the base/parent(error) class
    // this.message=message;
    super(message);
    // adding a status code property
    this.code = errorCode;

  }
}

module.exports=HttpError