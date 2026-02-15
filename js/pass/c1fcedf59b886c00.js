try {
  +x;
} catch (e) {
  if (e instanceof ReferenceError !== true) {}
}