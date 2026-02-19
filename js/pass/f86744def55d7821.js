var callCount = 0;
(function () {
  callCount += 1;
}).apply(null, [5, ...[6, 7, 8], 9]);