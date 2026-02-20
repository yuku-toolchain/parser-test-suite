var separator = {};
separator[Symbol.split] = null;
separator.toString = function () {
  return "2";
};
separator.valueOf = function () {};