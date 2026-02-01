try {
  new (null)();
} catch (e) {
  if (e instanceof TypeError !== true) {}
}
try {
  var x = null;
  new x();
} catch (e) {
  if (e instanceof TypeError !== true) {}
}
try {
  var x = null;
  new x();
} catch (e) {
  if (e instanceof TypeError !== true) {}
}