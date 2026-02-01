function __func() {
  var x = 1;
  throw "Catch Me If You Can";
  return x;
}
try {
  var x = __func();
} catch (e) {
  if (e !== "Catch Me If You Can") {}
}