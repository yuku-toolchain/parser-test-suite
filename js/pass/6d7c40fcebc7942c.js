var callCount = 0;
(function () {
  callCount += 1;
}).apply(null, [...[3, 4, 5]]);