var following = 0;
var iter = (function* () {
  following += 1;
})();
function* f([] = iter) {}
iter.next();