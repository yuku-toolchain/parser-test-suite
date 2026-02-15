var o = {
  a: 3,
  b: 4
};
Object.defineProperty(o, "x", {
  value: 4,
  enumerable: false
});
var iterCount = 0;
for (const {...rest} of [o]) {
  iterCount += 1;
}