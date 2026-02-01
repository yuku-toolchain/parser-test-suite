var following = 0;
var iter = (function* () {
  following += 1;
})();
var C = class {
  async *method([] = iter) {}
};
var method = C.prototype.method;
iter.next();