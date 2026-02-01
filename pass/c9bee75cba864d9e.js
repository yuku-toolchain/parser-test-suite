var argObj = (function () {
  return arguments;
})(1, 2, 3);
Object.freeze(argObj);