var first = 0;
var second = 0;
var iter = (function* () {
  first += 1;
  second += 1;
})();
var obj = {
  async *method([...x] = iter) {}
};
iter.next();