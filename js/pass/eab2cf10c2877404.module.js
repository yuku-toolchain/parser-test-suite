function foo(a, b, c) {
  a = 1;
  b = 'str';
  c = 2.1;
  return arguments[0] === 10 && arguments[1] === 'sss' && arguments[2] === 1;
}