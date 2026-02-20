var values = [2, 1, 3];
var initCount = 0;
var callCount = 0;
function* f([[...x] = (function () {
  initCount += 1;
})()]) {
  callCount = callCount + 1;
}
f([values]).next();