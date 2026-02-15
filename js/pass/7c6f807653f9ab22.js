try {
  object[1];
} catch (e) {
  if (e instanceof ReferenceError !== true) {}
}
try {
  object.prop;
} catch (e) {
  if (e instanceof ReferenceError !== true) {}
}