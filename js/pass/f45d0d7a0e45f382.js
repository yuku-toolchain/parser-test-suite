let symbol = Symbol('foo');
let o = {};
o[symbol] = 1;
var callCount = 0;
new (function (obj) {
  callCount += 1;
})({
  ...o,
  c: 4,
  d: 5
});