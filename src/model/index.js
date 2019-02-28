const { add, update, getById } = require("./validation");

module.exports = {
  // book
  bookReqSchema: {
    add,
    update,
    getById
  }
};
