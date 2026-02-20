function f() {
  return Reflect.getOwnPropertyDescriptor(f, 'arguments');
}
Reflect.defineProperty(f, 'arguments', {
  writable: false,
  configurable: false
});
var desc = Reflect.getOwnPropertyDescriptor(f, 'arguments');
if (desc && desc.configurable === false && desc.writable === false) {
  var desc2 = f();
}