try {
  new Math();
} catch (e) {
  if (e instanceof TypeError !== true) {}
}
try {
  new new Math()();
} catch (e) {
  if (e instanceof TypeError !== true) {}
}
try {
  var x = new Math();
  new x();
} catch (e) {
  if (e instanceof TypeError !== true) {}
}