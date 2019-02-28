const Joi = require("joi");
const { createGenerator } = require("./keygen");

const minIdLength = 10;
const idGenerator = createGenerator(minIdLength);

/* JOI validation schemas */
const bookAttributes = {
  id: Joi.string()
    .min(minIdLength)
    .default(idGenerator, "Unique book id."),
  title: Joi.string().required(),
  author: Joi.string().required(),
  pages: Joi.number().optional(),
  isbn: Joi.string()
    .allow("", null)
    .optional()
};

const addBookReqSchema = Joi.object({
  ...bookAttributes
});

const updateBookByIdReqSchema = Joi.object({
  ...bookAttributes,
  id: Joi.string().required()
});

const getBookById = Joi.string().min(minIdLength);

module.exports = {
  add: addBookReqSchema,
  update: updateBookByIdReqSchema,
  getById: getBookById
};
