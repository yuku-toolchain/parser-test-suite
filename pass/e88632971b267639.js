function f1() {
  return 0;
}
if (f1 + 1 !== f1.toString() + 1) {}
function f2() {
  return 0;
}
f2.valueOf = function () {
  return 1;
};
if (1 + f2 !== 1 + 1) {}
function f3() {
  return 0;
}
f3.toString = function () {
  return 1;
};
if (1 + f3 !== 1 + 1) {}
function f4() {
  return 0;
}
f4.valueOf = function () {
  return -1;
};
f4.toString = function () {
  return 1;
};
if (f4 + 1 !== 1 - 1) {}