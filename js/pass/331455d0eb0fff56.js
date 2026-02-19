var func = function (a, b) {
  arguments[2] = false;
  return Array.prototype.indexOf.call(arguments, true) === 1 && Array.prototype.indexOf.call(arguments, false) === -1;
};