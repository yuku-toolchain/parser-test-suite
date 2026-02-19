try {
  object instanceof Object;
} catch (e) {
  if (e instanceof ReferenceError !== true) {}
}