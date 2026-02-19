var checkPoint = "";
function fn1(executor) {
  checkPoint += "a";
  executor();
  checkPoint += "b";
  executor(function () {}, function () {});
  checkPoint += "c";
}
fn1.resolve = function () {};
Promise.race.call(fn1, []);
checkPoint = "";
function fn2(executor) {
  checkPoint += "a";
  executor(undefined, undefined);
  checkPoint += "b";
  executor(function () {}, function () {});
  checkPoint += "c";
}
fn2.resolve = function () {};
Promise.race.call(fn2, []);
checkPoint = "";
function fn3(executor) {
  checkPoint += "a";
  executor(undefined, function () {});
  checkPoint += "b";
  executor(function () {}, function () {});
  checkPoint += "c";
}
Object.defineProperty(fn3, "resolve", {
  get() {}
});
checkPoint = "";
function fn4(executor) {
  checkPoint += "a";
  executor(function () {}, undefined);
  checkPoint += "b";
  executor(function () {}, function () {});
  checkPoint += "c";
}
Object.defineProperty(fn4, "resolve", {
  get() {}
});
checkPoint = "";
function fn5(executor) {
  checkPoint += "a";
  executor("invalid value", 123);
  checkPoint += "b";
  executor(function () {}, function () {});
  checkPoint += "c";
}
Object.defineProperty(fn5, "resolve", {
  get() {}
});