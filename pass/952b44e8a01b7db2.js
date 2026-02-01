var iter = {};
iter[Symbol.iterator] = function () {};
class C {
  *method([x] = iter) {}
}
var c = new C();