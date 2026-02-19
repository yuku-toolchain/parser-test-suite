var initCount = 0;
var iterCount = 0;
var iter = (function* () {
  iterCount += 1;
})();
var iterCount = 0;
for (const [[] = (function () {
  initCount += 1;
  return iter;
})()] of [[]]) {
  iterCount += 1;
}