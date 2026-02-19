var values = [2, 1, 3];
var initCount = 0;
var iterCount = 0;
for (let [[...x] = (function () {
  initCount += 1;
})()] = [values]; iterCount < 1; ) {
  iterCount += 1;
}