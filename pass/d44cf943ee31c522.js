var func = function (a, b) {
  return 0 === Array.prototype.indexOf.call(arguments, arguments[0]) && -1 === Array.prototype.indexOf.call(arguments, arguments[1]);
};