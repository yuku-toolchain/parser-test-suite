function fn(a) {
  Object.defineProperty(arguments, "0", {
    writable: false,
    enumerable: false
  });
  Object.defineProperty(arguments, "0", {
    configurable: false
  });
  a = 2;
}
fn(1);