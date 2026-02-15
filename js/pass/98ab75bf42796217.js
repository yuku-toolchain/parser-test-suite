try {
  x();
} catch (e) {
  if (e instanceof ReferenceError !== true) {}
}
try {
  x(1, 2, 3);
} catch (e) {
  if (e instanceof ReferenceError !== true) {}
}