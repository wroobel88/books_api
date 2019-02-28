const generate = require("nanoid/generate");

const alphabet =
  "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz-";

const createGenerator = size => () => generate(alphabet, size);

module.exports = { createGenerator };
