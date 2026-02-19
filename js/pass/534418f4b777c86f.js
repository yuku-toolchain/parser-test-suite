var obj = {
  [Symbol.toPrimitive]: {}
};
function evaluate() {
  var C = class {
    [obj] = refErrorIfEvaluated;
  };
}