var following = 0;
var iter = (function* () {
  following += 1;
})();
var f;
f = async function* h([] = iter) {};
iter.next();