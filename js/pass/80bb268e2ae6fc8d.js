var func = function (a, b) {
  return 0 === Array.prototype.indexOf.call(arguments, arguments[0]) && 3 === Array.prototype.indexOf.call(arguments, arguments[3]) && -1 === Array.prototype.indexOf.call(arguments, arguments[4]);
};