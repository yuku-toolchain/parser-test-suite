var iter = (function* () {})();
class C {
  static async *method([...x] = iter) {}
}
var method = C.method;