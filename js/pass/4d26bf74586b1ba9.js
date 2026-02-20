var first = 0;
var second = 0;
var iter = (function* () {
  first += 1;
  second += 1;
})();
class C {
  async *method([...x]) {}
}
var method = C.prototype.method;
iter.next();