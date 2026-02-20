var first = 0;
var second = 0;
var iter = (function* () {
  first += 1;
  second += 1;
})();
function* f([...x] = iter) {}
iter.next();