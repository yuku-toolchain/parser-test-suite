try {
  new new Boolean(true)();
} catch (e) {
  if (e instanceof TypeError !== true) {}
}
try {
  var x = new Boolean(true);
  new x();
} catch (e) {
  if (e instanceof TypeError !== true) {}
}
try {
  var x = new Boolean(true);
  new x();
} catch (e) {
  if (e instanceof TypeError !== true) {}
}