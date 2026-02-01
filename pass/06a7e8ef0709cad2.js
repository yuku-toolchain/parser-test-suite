var values = [2, 1, 3];
var initCount = 0;
var iterCount = 0;
for (var [[...x] = (function () {
  initCount += 1;
})()] of [[values]]) {
  iterCount += 1;
}