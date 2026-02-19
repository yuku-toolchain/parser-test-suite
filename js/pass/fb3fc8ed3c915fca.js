var following = 0;
var iter = (function* () {
  following += 1;
})();
async function* f([]) {}
iter.next();