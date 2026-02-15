try {
  ("1")();
} catch (e) {
  if (e instanceof TypeError !== true) {}
}
try {
  var x = "1";
  x();
} catch (e) {
  if (e instanceof TypeError !== true) {}
}