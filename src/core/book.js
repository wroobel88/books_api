const Joi = require("joi");
const { ValidationError, DatabaseError, InternalError } = require("./errors");
const { bookReqSchema } = require("../model");

const addBook = async (repo, book) => {
  const { error: validationError, value: validated } = Joi.validate(
    book,
    bookReqSchema.add
  );
  if (validationError) throw createValidationError(validationError);
  const { error, result } = await repo.addBook(validated);
  if (error) throw new DatabaseError(error);
  return result;
};

const deleteBookById = async (repo, id) => {
  const { error: validationError, value: validId } = Joi.validate(
    id,
    bookReqSchema.getById
  );
  if (validationError) throw createValidationError(validationError);
  const { error, result } = await repo.deleteBookById(validId);
  if (error) throw new DatabaseError(error);
  return result;
};

const getAllBooks = async repo => {
  const { error, result } = await repo.getAllBooks();
  if (error) throw new InternalError(error.message);
  return result;
};

const createValidationError = ve =>
  new ValidationError(ve.details[0].message.replace(/"/g, ""));

const getBookById = async (repo, id) => {
  const { error: validationError, value: validId } = Joi.validate(
    id,
    bookReqSchema.getById
  );
  if (validationError) throw createValidationError(validationError);
  const { error, result } = await repo.getBookById(validId);
  if (error) throw new DatabaseError(error);
  return result;
};

const updateBookById = async (repo, book) => {
  const { error: validationError, value: validated } = Joi.validate(
    book,
    bookReqSchema.update
  );
  if (validationError) throw createValidationError(validationError);
  const { error, result } = await repo.updateBookById(validated);
  if (error) throw new DatabaseError(error);
  return result;
};

module.exports = {
  addBook,
  deleteBookById,
  getAllBooks,
  getBookById,
  updateBookById
};
