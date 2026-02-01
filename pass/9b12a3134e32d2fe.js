function f(a, ...rest) {
  arguments[0] = 1;
  arguments[1] = 2;
}
f(3, 4, 5);