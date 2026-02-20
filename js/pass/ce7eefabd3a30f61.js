function fn() {}
function evaluate() {
  class C {
    [noRef] = fn();
  }
}