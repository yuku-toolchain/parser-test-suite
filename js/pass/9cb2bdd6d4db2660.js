function __func() {
  var x = null;
  return x;
}
try {
  var x = __func();
} catch (e) {}