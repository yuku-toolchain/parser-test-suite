var following = 0;
var iter = (function* () {
  following += 1;
})();
class C {
  async *method([]) {}
}
var method = C.prototype.method;
iter.next();