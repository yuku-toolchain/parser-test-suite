var func = function (a, b) {
  return 0 === Array.prototype.lastIndexOf.call(arguments, arguments[0]) && -1 === Array.prototype.lastIndexOf.call(arguments, arguments[1]);
};