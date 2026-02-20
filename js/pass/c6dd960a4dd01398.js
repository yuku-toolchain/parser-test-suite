var iter = (function* () {})();
var C = class {
  static *method([...x] = iter) {}
};