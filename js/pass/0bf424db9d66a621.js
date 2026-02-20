var iter = (function* () {})();
var C = class {
  *method([...x] = iter) {}
};
var c = new C();