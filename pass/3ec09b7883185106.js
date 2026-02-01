try {
  new (1)();
} catch (e) {
  if (e instanceof TypeError !== true) {}
}
try {
  var x = 1;
  new x();
} catch (e) {
  if (e instanceof TypeError !== true) {}
}
try {
  var x = 1;
  new x();
} catch (e) {
  if (e instanceof TypeError !== true) {}
}