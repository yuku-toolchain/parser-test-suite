try {
  new x();
} catch (e) {
  if (e instanceof ReferenceError !== true) {}
}
try {
  new x();
} catch (e) {
  if (e instanceof ReferenceError !== true) {}
}