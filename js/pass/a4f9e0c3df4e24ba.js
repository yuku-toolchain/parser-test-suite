var first = 0;
var second = 0;
var iter = (function* () {
  first += 1;
  second += 1;
})();
var C = class {
  static async *method([...x] = iter) {}
};
var method = C.method;
iter.next();