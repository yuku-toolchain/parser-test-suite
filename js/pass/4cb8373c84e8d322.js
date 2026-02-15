var argObj = (function () {
  return arguments;
})(1, 2, 3);
var accessed = false;
Object.defineProperty(argObj, 0, {
  get: function () {
    accessed = true;
    return 12;
  }
});