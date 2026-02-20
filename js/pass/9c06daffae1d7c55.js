let custom1 = BigInt(0);
let custom2 = Object(BigInt(0));
Object.defineProperty(BigInt.prototype, Symbol.toStringTag, {
  value: undefined
});
Object.defineProperty(BigInt.prototype, Symbol.toStringTag, {
  value: null
});
Object.defineProperty(BigInt.prototype, Symbol.toStringTag, {
  value: Symbol.toStringTag
});
Object.defineProperty(BigInt.prototype, Symbol.toStringTag, {
  value: 86
});
Object.defineProperty(BigInt.prototype, Symbol.toStringTag, {
  value: new String('test262')
});
Object.defineProperty(BigInt.prototype, Symbol.toStringTag, {
  value: {}
});
Object.defineProperty(BigInt.prototype, Symbol.toStringTag, {
  value: _ => 'str'
});