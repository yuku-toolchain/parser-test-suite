var toString = Object.prototype.toString;
var arrIter = [][Symbol.iterator]();
var arrIterProto = Object.getPrototypeOf(arrIter);
Object.defineProperty(arrIterProto, Symbol.toStringTag, {
  configurable: true,
  value: null
});
delete arrIterProto[Symbol.toStringTag];