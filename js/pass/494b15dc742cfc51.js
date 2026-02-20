var initCount = 0;
var iterCount = 0;
var iter = (function* () {
  iterCount += 1;
})();
const [[] = (function () {
  initCount += 1;
  return iter;
})()] = [];