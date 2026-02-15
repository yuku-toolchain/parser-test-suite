var iter = (function* () {})();
iter.next();
var iterCount = 0;
for (var [] of [iter]) {
  iterCount += 1;
}