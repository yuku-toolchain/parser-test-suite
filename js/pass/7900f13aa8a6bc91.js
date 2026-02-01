function f() {
  return Reflect.getOwnPropertyDescriptor(f, 'caller');
}
function g() {
  return f();
}
Reflect.defineProperty(f, 'caller', {
  writable: false,
  configurable: false
});
var desc = Reflect.getOwnPropertyDescriptor(f, 'caller');
if (desc && desc.configurable === false && desc.writable === false) {
  var desc2 = g();
}