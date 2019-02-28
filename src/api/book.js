const add = ({ addBook }, repo) => async (req, res, next) => {
  try {
    res.send(await addBook(repo, req.body));
  } catch (e) {
    next(e);
  }
};

const deleteById = ({ deleteBookById }, repo) => async (req, res, next) => {
  try {
    res.send(await deleteBookById(repo, req.params.id));
  } catch (e) {
    next(e);
  }
};

const getAll = ({ getAllBooks }, repo) => async (req, res, next) => {
  try {
    res.send(await getAllBooks(repo));
  } catch (e) {
    next(e);
  }
};

const getById = ({ getBookById }, repo) => async (req, res, next) => {
  try {
    res.send(await getBookById(repo, req.params.id));
  } catch (e) {
    next(e);
  }
};

const updateById = ({ updateBookById }, repo) => async (req, res, next) => {
  try {
    res.send(await updateBookById(repo, req.body));
  } catch (e) {
    next(e);
  }
};

const methodNotAllowed = (req, res, next) => res.status(405).send();

const createBookRoutes = (router, controller, repo) => {
  router.get("/books", getAll(controller, repo));
  router.all("/books", methodNotAllowed);
  router.get("/book/:id", getById(controller, repo));
  router.put("/book", updateById(controller, repo));
  router.delete("/book/:id", deleteById(controller, repo));
  router.post("/book", add(controller, repo));
  router.all("/book(/:id)?", methodNotAllowed);
};

module.exports = { createBookRoutes };
