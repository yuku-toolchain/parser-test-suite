var iter = (function* () {})();
iter.next();
var ranCatch = false;
try {
  throw iter;
} catch ([]) {
  ranCatch = true;
}