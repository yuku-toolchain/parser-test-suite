function f1(x) {
  return x;
  function x() {
    return 7;
  }
}
if (!(f1().constructor.prototype === Function.prototype)) {}
function f2(x) {
  return typeof x;
  function x() {
    return 7;
  }
}
if (!(f2() === "function")) {}
function f3() {
  return typeof arguments;
  function arguments() {
    return 7;
  }
}
if (!(f3() === "function")) {}