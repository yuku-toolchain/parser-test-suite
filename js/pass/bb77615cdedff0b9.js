var iter = (function* () {})();
class C {
  method([...x] = iter) {}
}
var c = new C();