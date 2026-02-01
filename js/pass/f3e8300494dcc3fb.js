var values = [2, 1, 3];
var initCount = 0;
const [[...x] = (function () {
  initCount += 1;
})()] = [values];