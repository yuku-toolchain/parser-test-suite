var args;
var g = function* (x = args = arguments) {
  function arguments() {}
};
g().next();