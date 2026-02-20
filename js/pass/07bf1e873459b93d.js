function fn(a) {
  Object.defineProperty(arguments, "0", {
    writable: false
  });
  arguments[0] = 2;
  Object.defineProperty(arguments, "0", {
    configurable: false
  });
  a = 3;
}
fn(1);