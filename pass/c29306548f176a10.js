var rest;
var obj = {};
Object.defineProperty(obj, "a", {
  value: 3,
  configurable: false,
  enumerable: true
});
Object.defineProperty(obj, "b", {
  value: 4,
  writable: false,
  enumerable: true
});
var counter = 0;
for ({...rest} of [obj]) {
  counter += 1;
}