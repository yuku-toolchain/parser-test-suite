var callCount = 0;
(function (obj) {
  callCount += 1;
})({
  a: 1,
  b: 2,
  ...undefined
});