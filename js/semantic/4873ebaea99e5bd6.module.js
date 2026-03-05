function decorator() {
  return () => {};
}
var yield = decorator;
var C = @yield() class {};