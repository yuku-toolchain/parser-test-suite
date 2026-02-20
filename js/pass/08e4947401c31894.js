const BigIntToString = BigInt.prototype.toString;
let toStringGets = 0;
let toStringCalls = 0;
let toStringFunction = function () {
  ++toStringCalls;
  return `${BigIntToString.call(this)}foo`;
};
Object.defineProperty(BigInt.prototype, "toString", {
  get: () => {
    ++toStringGets;
    return toStringFunction;
  }
});
const BigIntValueOf = BigInt.prototype.valueOf;
let valueOfGets = 0;
let valueOfCalls = 0;
let valueOfFunction = function () {
  ++valueOfCalls;
  return BigIntValueOf.call(this) * 2n;
};
Object.defineProperty(BigInt.prototype, "valueOf", {
  get: () => {
    ++valueOfGets;
    return valueOfFunction;
  }
});
toStringFunction = undefined;
valueOfFunction = null;