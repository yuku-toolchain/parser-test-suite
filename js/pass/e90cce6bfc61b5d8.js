let custom1 = BigInt(0);
let custom2 = Object(BigInt(0));
Object.defineProperty(BigInt.prototype, Symbol.toStringTag, {
  value: 'test262'
});