function foo(a, b) {
  var d = delete arguments[0];
  return d === true && arguments[0] === undefined;
}