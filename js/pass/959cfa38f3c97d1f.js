var toString = Object.prototype.toString;
var genFn = function* () {};
var gen = genFn();
var genProto = Object.getPrototypeOf(gen);
Object.defineProperty(genProto, Symbol.toStringTag, {
  configurable: true,
  get: function () {
    return {};
  }
});
delete genProto[Symbol.toStringTag];