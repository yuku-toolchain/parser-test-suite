var obj = {
  [Symbol.toPrimitive]: {}
};
function evaluate() {
  class C {
    [obj] = refErrorIfEvaluated;
  }
}