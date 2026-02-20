try {
  x = y;
} catch (e) {
  if (e instanceof ReferenceError !== true) {}
}