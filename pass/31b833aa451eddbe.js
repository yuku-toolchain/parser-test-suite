try {
  (null)();
} catch (e) {
  if (e instanceof TypeError !== true) {}
}
try {
  var x = null;
  x();
} catch (e) {
  if (e instanceof TypeError !== true) {}
}