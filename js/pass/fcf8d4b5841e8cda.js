var iterations = 0;
var iter = (function* () {
  iterations += 1;
})();
var iterCount = 0;
for (let [...[]] of [iter]) {
  iterCount += 1;
}