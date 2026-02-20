function foo(a, b, c) {
  arguments[0] = 1;
  arguments[1] = 'str';
  arguments[2] = 2.1;
  return 10 === a && 'sss' === b && 1 === c;
}