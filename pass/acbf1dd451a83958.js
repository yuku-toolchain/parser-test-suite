var regexp = {};
regexp[Symbol.search] = null;
regexp.toString = function () {
  return "\\d";
};
regexp.valueOf = function () {};