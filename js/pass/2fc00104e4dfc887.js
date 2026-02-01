let o = {
  get a() {
    return 42;
  }
};
var callCount = 0;
(function (obj) {
  callCount += 1;
})({
  ...o,
  c: 4,
  d: 5
});