var getIterator = 0;
var arrayLike = {};
Object.defineProperty(arrayLike, Symbol.iterator, {
  get: function () {
    getIterator++;
  }
});
var s = Symbol("1");