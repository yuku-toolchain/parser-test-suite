var iterations = 0;
var iter = (function* () {
  iterations += 1;
})();
var ranCatch = false;
try {
  throw iter;
} catch ([...[]]) {
  ranCatch = true;
}