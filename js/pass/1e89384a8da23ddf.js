var a = [];
var callCount = 0;
var cb = function () {
  callCount += 1;
};
a.constructor = {};
Object.defineProperty(a.constructor, Symbol.species, {
  get: function () {}
});