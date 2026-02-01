var iter = (function* () {})();
iter.next();
var iterCount = 0;
for (let [] of [iter]) {
  iterCount += 1;
}