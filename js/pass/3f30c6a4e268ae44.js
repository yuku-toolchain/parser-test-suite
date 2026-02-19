var a = [1, 2, 3];
a.constructor = {};
a.constructor[Symbol.species] = function () {};
var b = [1, 2, 3];
Object.defineProperty(b, "constructor", {
  get() {}
});
b.with(0, 0);