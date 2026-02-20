function C(executor) {
  executor(function () {}, function () {});
}
Object.defineProperty(C, Symbol.species, {
  get() {}
});
C.resolve = function () {};
Promise.race.call(C, []);