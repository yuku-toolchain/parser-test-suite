var getIterator = 0;
var arrayLike = {};
Object.defineProperty(arrayLike, Symbol.iterator, {
  get: function () {
    getIterator++;
  }
});
testWithBigIntTypedArrayConstructors(function (TA) {
  var s = Symbol("1");
});