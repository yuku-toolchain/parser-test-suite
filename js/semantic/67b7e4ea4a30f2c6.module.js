var args;
function* g(x = args = arguments) {
  function arguments() {}
}
g().next();