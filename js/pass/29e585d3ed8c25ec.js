Boolean.prototype[Symbol.toStringTag] = 'test262';
Number.prototype[Symbol.toStringTag] = 'test262';
String.prototype[Symbol.toStringTag] = 'test262';
Object.defineProperty(Symbol.prototype, Symbol.toStringTag, {
  value: 'test262'
});