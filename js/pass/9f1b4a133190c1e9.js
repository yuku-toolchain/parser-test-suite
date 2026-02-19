var first = 0;
var second = 0;
var iter = (function* () {
  first += 1;
  second += 1;
})();
var f = async function* ([...x] = iter) {};
iter.next();