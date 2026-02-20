var fn = () => {};
fn.a = 1;
Object.defineProperty(fn, "length", {
  enumerable: true
});