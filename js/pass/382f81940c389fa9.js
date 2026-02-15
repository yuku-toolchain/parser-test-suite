var source = [3, 4, 5];
var target;
var callCount = 0;
new (function () {
  callCount += 1;
})(1, 2, ...target = source);