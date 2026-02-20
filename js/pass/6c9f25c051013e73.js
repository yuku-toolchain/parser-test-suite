var source = [3, 4, 5];
var target;
var callCount = 0;
(function () {
  callCount += 1;
}).apply(null, [1, 2, ...target = source]);