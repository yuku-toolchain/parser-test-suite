var obj = {
  toString: function () {}
};
function evaluate() {
  var C = class {
    [obj];
  };
}