function T1() {
  Object.preventExtensions(this);
}
function T2() {
  Object.defineProperty(this, 0, {
    configurable: false,
    writable: true,
    enumerable: true
  });
}