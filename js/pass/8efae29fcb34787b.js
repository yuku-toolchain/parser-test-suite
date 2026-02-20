function fn() {}
function evaluate() {
  var C = class {
    [noRef] = fn();
  };
}