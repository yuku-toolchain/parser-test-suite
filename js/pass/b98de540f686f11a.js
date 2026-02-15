let o = {
  a: 2,
  b: 3
};
var callCount = 0;
(function (obj) {
  callCount += 1;
}).apply(null, [{
  a: 1,
  b: 7,
  ...o
}]);