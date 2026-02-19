var values = [2, 1, 3];
var initCount = 0;
let [[...x] = (function () {
  initCount += 1;
})()] = [values];