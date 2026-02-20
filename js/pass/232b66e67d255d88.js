try {
  var x = 1;
  var z = x ^= y;
} catch (e) {
  if (e instanceof ReferenceError !== true) {}
}