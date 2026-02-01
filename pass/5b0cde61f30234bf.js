var iter = (function* () {})();
iter.next();
var iterCount = 0;
for (const [] of [iter]) {
  iterCount += 1;
}