var obj = {
  [Symbol.toPrimitive]: function () {}
};
function evaluate() {
  class C {
    [obj];
  }
}