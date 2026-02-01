var initCount = 0;
var iterCount = 0;
var iter = (function* () {
  iterCount += 1;
})();
var iterCount = 0;
for (var [[] = (function () {
  initCount += 1;
  return iter;
})()] of [[]]) {
  iterCount += 1;
}