var callCount = 0;
(function () {
  callCount += 1;
}).apply(null, [1, 2, 3, ...[]]);