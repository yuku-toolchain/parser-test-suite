try {
  true && y;
} catch (e) {
  if (e instanceof ReferenceError !== true) {}
}