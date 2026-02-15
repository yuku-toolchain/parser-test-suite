function fn(a) {
  Object.defineProperty(arguments, "0", {
    configurable: false,
    enumerable: false,
    writable: false
  });
  a = 2;
}
fn(1);