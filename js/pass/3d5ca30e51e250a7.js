var following = 0;
var iter = (function* () {
  following += 1;
})();
var C = class {
  static *method([] = iter) {}
};
iter.next();