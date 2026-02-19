try {
  (MAX_VALUE in Number);
} catch (e) {
  if (e instanceof ReferenceError !== true) {}
}