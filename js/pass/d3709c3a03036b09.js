var callCount = 0;
new (function (obj) {
  callCount += 1;
})({
  ...undefined
});