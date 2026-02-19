let o = {
  a: 2,
  b: 3,
  c: 4,
  e: undefined,
  f: null,
  g: false
};
var callCount = 0;
new (function (obj) {
  callCount += 1;
})({
  ...o,
  a: 1,
  b: 7,
  d: 5,
  h: -0,
  i: Symbol("foo"),
  j: o
});