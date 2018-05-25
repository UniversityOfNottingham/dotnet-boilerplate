const { dest } = require("../package.json").paths;
const del = require("del");

module.exports = function clean() {
  return del(dest.root);
};
