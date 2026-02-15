try {
  false || y;
} catch (e) {
  if (e instanceof ReferenceError !== true) {}
}