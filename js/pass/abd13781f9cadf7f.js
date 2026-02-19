try {
  new new String("1")();
} catch (e) {
  if (e instanceof TypeError !== true) {}
}
try {
  var x = new String("1");
  new x();
} catch (e) {
  if (e instanceof TypeError !== true) {}
}
try {
  var x = new String("1");
  new x();
} catch (e) {
  if (e instanceof TypeError !== true) {}
}