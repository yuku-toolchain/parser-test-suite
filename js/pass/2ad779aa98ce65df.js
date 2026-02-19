var following = 0;
var iter = (function* () {
  following += 1;
})();
class C {
  method([]) {}
}
var c = new C();
iter.next();