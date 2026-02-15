var following = 0;
var iter = (function* () {
  following += 1;
})();
var obj = {
  async *method([] = iter) {}
};
iter.next();