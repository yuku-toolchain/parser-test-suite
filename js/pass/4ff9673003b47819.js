try {
  new new Number(1)();
} catch (e) {
  if (e instanceof TypeError !== true) {}
}
try {
  var x = new Number(1);
  new x();
} catch (e) {
  if (e instanceof TypeError !== true) {}
}
try {
  var x = new Number(1);
  new x();
} catch (e) {
  if (e instanceof TypeError !== true) {}
}