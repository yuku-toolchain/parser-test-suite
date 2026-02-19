var fn = () => {};
fn.a = 1;
Object.defineProperty(fn, "name", {
  enumerable: true
});
var fnKeys = Object.entries(fn).map(e => e[0]);