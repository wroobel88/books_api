const errorMessages = {
  exists: "This book already exists in the library.",
  notExists: "Resource with the given ID does not exist.",
  empty: "Library is empty.",
  usedId: "There is a book with given ID already."
};

const addBook = books => async book => {
  try {
    if (
      books.filter(b => b.author === book.author && b.title === book.title)
        .length > 0
    ) {
      return { error: errorMessages.exists };
    }
    if (
      books.filter(b => b.id === book.id)
        .length > 0
    ) {
      return { error: errorMessages.usedId };
    }
    books.push(book);
    const result = books;
    return { result };
  } catch (error) {
    return { error };
  }
};

const deleteBookById = books => async id => {
  try {
    if (books.length === 0) {
      return { error: errorMessages.empty };
    }
    if (books.length > 0) {
      if (books && !books.find(b => b.id === id)) {
        return { error: errorMessages.notExists };
      } else {
        const index = books.findIndex(b => b.id === id);
        books.splice(index, 1);
        const result = books;
        return { result };
      }
    }
  } catch (error) {
    return { error };
  }
};

const getAllBooks = books => async () => {
  try {
    const result = books;
    return { result };
  } catch (error) {
    return { error };
  }
};

const getBookById = books => async id => {
  try {
    if (books.length === 0) {
      return { error: errorMessages.empty };
    }
    if (books.length > 0) {
      if (books && !books.find(b => b.id === id)) {
        return { error: errorMessages.notExists };
      } else {
        const result = books.find(b => b.id === id);
        return { result };
      }
    }
  } catch (error) {
    return { error };
  }
};

const updateBookById = books => async book => {
  try {
    if (books.length === 0) {
      return { error: errorMessages.empty };
    }
    if (books.length > 0) {
      const id = book.id;
      if (books && !books.find(b => b.id === id)) {
        return { error: errorMessages.notExists };
      } else {
        const index = books.findIndex(b => b.id === id);
        books[index] = book;
        const result = books;
        return { result };
      }
    }
  } catch (error) {
    return { error };
  }
};

module.exports = books => ({
  addBook: addBook(books),
  deleteBookById: deleteBookById(books),
  getAllBooks: getAllBooks(books),
  getBookById: getBookById(books),
  updateBookById: updateBookById(books)
});
