var initCount = 0;
var callCount = 0;
var f;
f = function ([[] = (function () {
  initCount += 1;
})()]) {
  callCount = callCount + 1;
};
f([[23]]);