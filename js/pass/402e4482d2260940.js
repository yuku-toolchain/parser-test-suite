var regexp = {};
regexp[Symbol.match] = null;
regexp.toString = function () {
  return "\\d";
};
regexp.valueOf = function () {};