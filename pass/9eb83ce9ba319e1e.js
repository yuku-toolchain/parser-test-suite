var a = [];
a.constructor = {};
Object.defineProperty(a.constructor, Symbol.species, {
  get: function () {}
});