var values = [2, 1, 3];
var initCount = 0;
var ranCatch = false;
try {
  throw [values];
} catch ([[...x] = (function () {
  initCount += 1;
})()]) {
  ranCatch = true;
}