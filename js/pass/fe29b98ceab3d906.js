try {
  ("MAX_VALUE" in NUMBER);
} catch (e) {
  if (e instanceof ReferenceError !== true) {}
}