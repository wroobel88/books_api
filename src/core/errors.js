class DatabaseError extends Error {
  constructor(message) {
    super(message);
    this.name = "DatabaseError";
    this.status = 500;
  }
}

class InternalError extends Error {
  constructor(message) {
    super(message);
    this.name = "InternalError";
    this.status = 500;
  }
}

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
    this.status = 400;
  }
}

module.exports = {
  ValidationError,
  DatabaseError
};
