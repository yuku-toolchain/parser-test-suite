var obj = {
  toString: undefined,
  valueOf: function () {}
};
function evaluate() {
  class C {
    [obj];
  }
}