const errorHandler = () => (err, _, res, next) => {
  res.status(err.status).send({ error: err.message });
};

module.exports = { errorHandler };
