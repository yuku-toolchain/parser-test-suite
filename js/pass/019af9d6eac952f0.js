function C(executor) {
  executor(function () {}, function () {});
}
C.resolve = function () {};
Object.defineProperty(C, Symbol.species, {
  get: function () {}
});
Promise.all.call(C, []);