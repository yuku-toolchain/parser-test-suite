let o = {
  a: 2,
  b: 3
};
let executedGetter = false;
var callCount = 0;
new (function (obj) {
  callCount += 1;
})({
  ...o,
  get c() {
    executedGetter = true;
  }
});