var source = [2, 3, 4];
var target;
var callCount = 0;
(function () {
  callCount += 1;
})(...target = source);