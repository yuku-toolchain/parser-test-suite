var iter = (function* () {})();
class C {
  static async *method([...x]) {}
}
var method = C.method;