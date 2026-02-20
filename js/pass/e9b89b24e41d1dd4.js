try {
  x ^ 1;
} catch (e) {
  if (e instanceof ReferenceError !== true) {}
}