function f1() {
  return arguments.length;
}
if (!(f1() === 0)) {}
if (!(f1(0) === 1)) {}
if (!(f1(0, 1) === 2)) {}
if (!(f1(0, 1, 2) === 3)) {}
if (!(f1(0, 1, 2, 3) === 4)) {}
var f2 = function () {
  return arguments.length;
};
if (!(f2() === 0)) {}
if (!(f2(0) === 1)) {}
if (!(f2(0, 1) === 2)) {}
if (!(f2(0, 1, 2) === 3)) {}
if (!(f2(0, 1, 2, 3) === 4)) {}