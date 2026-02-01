let o = {
  a: 2,
  b: 3
};
let executedGetter = false;
var callCount = 0;
(function (obj) {
  callCount += 1;
}).apply(null, [{
  ...o,
  get c() {
    executedGetter = true;
  }
}]);