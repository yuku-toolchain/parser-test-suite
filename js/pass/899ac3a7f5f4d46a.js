var rest;
var obj = {
  a: 3,
  b: 4
};
Object.defineProperty(obj, "x", {
  value: 4,
  enumerable: false
});
var counter = 0;
for ({...rest} of [obj]) {
  counter += 1;
}