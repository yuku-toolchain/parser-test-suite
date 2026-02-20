let symbol = Symbol('foo');
let o = {};
o[symbol] = 1;
var callCount = 0;
(function (obj) {
  callCount += 1;
}).apply(null, [{
  ...o,
  c: 4,
  d: 5
}]);