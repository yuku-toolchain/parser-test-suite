var iter = {};
iter[Symbol.iterator] = function () {};
class C {
  method([x]) {}
}
var c = new C();