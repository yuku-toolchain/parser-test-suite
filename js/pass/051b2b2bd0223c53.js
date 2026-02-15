var obj = {
  [Symbol.toPrimitive]: function () {}
};
function evaluate() {
  var C = class {
    [obj];
  };
}