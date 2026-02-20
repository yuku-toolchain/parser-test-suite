try {
  new (true)();
} catch (e) {
  if (e instanceof TypeError !== true) {}
}
try {
  var x = true;
  new x();
} catch (e) {
  if (e instanceof TypeError !== true) {}
}
try {
  var x = true;
  new x();
} catch (e) {
  if (e instanceof TypeError !== true) {}
}