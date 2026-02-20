var arg = (function () {
  return arguments;
})(1, 2, 3);
var accessed = false;
Object.defineProperties(arg, {
  "0": {
    get: function () {
      accessed = true;
      return 12;
    }
  }
});