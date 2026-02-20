var toString = Object.prototype.toString;
delete Symbol.prototype[Symbol.toStringTag];
Object.defineProperty(Math, Symbol.toStringTag, {
  value: Symbol()
});
delete JSON[Symbol.toStringTag];