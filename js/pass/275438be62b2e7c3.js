try {
  (true)();
} catch (e) {
  if (e instanceof TypeError !== true) {}
}
try {
  var x = true;
  x();
} catch (e) {
  if (e instanceof TypeError !== true) {}
}