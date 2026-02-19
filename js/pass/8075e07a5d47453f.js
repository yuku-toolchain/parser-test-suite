var obj = {
  [Symbol.toPrimitive]: 42
};
function evaluate() {
  var C = class {
    [obj] = refErrorIfEvaluated;
  };
}