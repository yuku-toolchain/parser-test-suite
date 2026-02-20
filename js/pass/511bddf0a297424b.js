var following = 0;
var iter = (function* () {
  following += 1;
})();
var C = class {
  *method([] = iter) {}
};
var c = new C();
iter.next();