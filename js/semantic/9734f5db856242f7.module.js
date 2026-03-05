function foo(a, b) {
  var d = delete a;
  return d === false && a === 1;
}