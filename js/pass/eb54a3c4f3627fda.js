var toString = Object.prototype.toString;
var map = new Map();
delete Map.prototype[Symbol.toStringTag];
var mapIter = map[Symbol.iterator]();
var mapIterProto = Object.getPrototypeOf(mapIter);
Object.defineProperty(mapIterProto, Symbol.toStringTag, {
  configurable: true,
  get: function () {
    return new String('ShouldNotBeUnwrapped');
  }
});
delete mapIterProto[Symbol.toStringTag];