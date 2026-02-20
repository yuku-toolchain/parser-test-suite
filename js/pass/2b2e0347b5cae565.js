var obj = {
  toString: undefined,
  valueOf: function () {}
};
function evaluate() {
  var C = class {
    [obj];
  };
}