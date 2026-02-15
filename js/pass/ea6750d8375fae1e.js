var checkPoint = "";
function fn1(executor) {
  checkPoint += "a";
}
Object.defineProperty(fn1, 'resolve', {
  get() {}
});
checkPoint = "";
function fn2(executor) {
  checkPoint += "a";
  executor();
  checkPoint += "b";
}
Object.defineProperty(fn2, 'resolve', {
  get() {}
});
checkPoint = "";
function fn3(executor) {
  checkPoint += "a";
  executor(undefined, undefined);
  checkPoint += "b";
}
Object.defineProperty(fn3, 'resolve', {
  get() {}
});
checkPoint = "";
function fn4(executor) {
  checkPoint += "a";
  executor(undefined, function () {});
  checkPoint += "b";
}
Object.defineProperty(fn4, 'resolve', {
  get() {}
});
checkPoint = "";
function fn5(executor) {
  checkPoint += "a";
  executor(function () {}, undefined);
  checkPoint += "b";
}
Object.defineProperty(fn5, 'resolve', {
  get() {}
});
checkPoint = "";
function fn6(executor) {
  checkPoint += "a";
  executor(123, "invalid value");
  checkPoint += "b";
}
Object.defineProperty(fn6, 'resolve', {
  get() {}
});