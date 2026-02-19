var first = 0;
var second = 0;
var iter = (function* () {
  first += 1;
  second += 1;
})();
class C {
  method([...x]) {}
}
var c = new C();
iter.next();