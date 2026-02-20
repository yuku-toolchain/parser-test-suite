function fn(a) {
  Object.defineProperty(arguments, "0", {
    writable: false,
    enumerable: false,
    value: 2,
    configurable: false
  });
}
fn(1);