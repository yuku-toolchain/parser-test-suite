let o = {
  c: 3,
  d: 4
};
var callCount = 0;
new (function (obj) {
  callCount += 1;
})({
  ...o
});