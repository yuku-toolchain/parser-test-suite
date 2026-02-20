var iterations = 0;
var iter = (function* () {
  iterations += 1;
})();
var iterCount = 0;
for (var [] of [iter]) {
  iterCount += 1;
}