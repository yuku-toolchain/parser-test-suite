try {
  new Boolean(true)();
} catch (e) {
  if (e instanceof TypeError !== true) {}
}
try {
  var x = new Boolean(true);
  x();
} catch (e) {
  if (e instanceof TypeError !== true) {}
}