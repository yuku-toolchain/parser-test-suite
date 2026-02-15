try {
  x ^ (x = 1);
} catch (e) {
  if (e instanceof ReferenceError !== true) {}
}
if (((y = 1) ^ y) !== 0) {}