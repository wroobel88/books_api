const express = require("express");
const { createBookRoutes } = require("./book");

const createRouter = (controller, repo) => {
  const router = express.Router();
  createBookRoutes(router, controller, repo);
  return router;
};

module.exports = { createRouter };
