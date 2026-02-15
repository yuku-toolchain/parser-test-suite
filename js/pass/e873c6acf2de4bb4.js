var following = 0;
var iter = (function* () {
  following += 1;
})();
var f = async function* ([] = iter) {};
iter.next();