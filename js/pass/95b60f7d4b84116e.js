var toString = Object.prototype.toString;
var strIter = ('')[Symbol.iterator]();
var strIterProto = Object.getPrototypeOf(strIter);
Object.defineProperty(strIterProto, Symbol.toStringTag, {
  configurable: true,
  get: function () {
    return new String('ShouldNotBeUnwrapped');
  }
});
delete strIterProto[Symbol.toStringTag];