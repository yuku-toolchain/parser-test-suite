var initCount = 0;
var ranCatch = false;
try {
  throw [[23]];
} catch ([[] = (function () {
  initCount += 1;
})()]) {
  ranCatch = true;
}