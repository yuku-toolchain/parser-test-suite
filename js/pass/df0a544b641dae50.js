var a = [];
a.constructor = {};
a.constructor[Symbol.species] = function () {};
var b = [];
Object.defineProperty(b, "constructor", {
  get() {}
});
b.toReversed();