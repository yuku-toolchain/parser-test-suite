var following = 0;
var iter = (function* () {
  following += 1;
})();
class C {
  static async *method([]) {}
}
var method = C.method;
iter.next();