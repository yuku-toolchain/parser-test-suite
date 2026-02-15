var callCount = 0;
new (function (obj) {
  callCount += 1;
})({
  a: 1,
  b: 2,
  ...undefined
});