try {
  undefined();
} catch (e) {
  if (e instanceof TypeError !== true) {}
}
try {
  var x = undefined;
  x();
} catch (e) {
  if (e instanceof TypeError !== true) {}
}