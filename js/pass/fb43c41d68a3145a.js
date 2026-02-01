function f_arg(x, y, z) {
  return z;
}
if (f_arg(x = 1, y = x, x + y) !== 2) {}