try {
  new undefined();
} catch (e) {
  if (e instanceof TypeError !== true) {}
}
try {
  var x = undefined;
  new x();
} catch (e) {
  if (e instanceof TypeError !== true) {}
}
try {
  var x = undefined;
  new x();
} catch (e) {
  if (e instanceof TypeError !== true) {}
}