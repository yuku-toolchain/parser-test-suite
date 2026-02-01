var callCount = 0;
(function (obj) {
  callCount += 1;
})({
  ...undefined
});