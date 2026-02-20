var o = {
  a: 0,
  b: 1
};
var cthulhu = {
  get x() {
    delete o.a;
    o.b = 42;
    o.c = "ni";
  }
};
var callCount = 0;
(function (obj) {
  callCount += 1;
}).apply(null, [{
  ...cthulhu,
  ...o
}]);