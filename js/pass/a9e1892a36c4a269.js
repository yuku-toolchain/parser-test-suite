function f_arg() {}
try {
  f_arg(x, x = 1);
} catch (e) {
  if (e instanceof ReferenceError !== true) {}
}