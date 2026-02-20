var toString = Object.prototype.toString;
var set = new Set();
delete Set.prototype[Symbol.toStringTag];
var setIter = set[Symbol.iterator]();
var setIterProto = Object.getPrototypeOf(setIter);
Object.defineProperty(setIterProto, Symbol.toStringTag, {
  configurable: true,
  get: function () {
    return new String('ShouldNotBeUnwrapped');
  }
});
delete setIterProto[Symbol.toStringTag];