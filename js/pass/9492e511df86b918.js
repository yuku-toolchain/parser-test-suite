var following = 0;
var iter = (function* () {
  following += 1;
})();
class C {
  static method([] = iter) {}
}
iter.next();