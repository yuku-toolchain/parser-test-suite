let valueOfGets = 0;
let valueOfCalls = 0;
let valueOfFunction = () => {
  ++valueOfCalls;
  return 123;
};
Object.defineProperty(Symbol.prototype, "valueOf", {
  get: () => {
    ++valueOfGets;
    return valueOfFunction;
  }
});
let toStringGets = 0;
let toStringCalls = 0;
let toStringFunction = () => {
  ++toStringCalls;
  return "foo";
};
Object.defineProperty(Symbol.prototype, "toString", {
  get: () => {
    ++toStringGets;
    return toStringFunction;
  }
});
valueOfFunction = null;
toStringFunction = function () {};
toStringFunction = undefined;