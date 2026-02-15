function C(executor) {
  executor(() => {}, () => {});
}
Object.defineProperty(C, Symbol.species, {
  get() {}
});
C.resolve = function () {};
Promise.any.call(C, [1]);