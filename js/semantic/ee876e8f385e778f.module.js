var args;
function f(x = args = arguments) {
  function arguments() {}
}
f();