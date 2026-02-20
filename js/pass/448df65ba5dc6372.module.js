var a = {};
var actual;
actual = [1].flatMap(function () {
  return [this];
}, "TestString");
actual = [1].flatMap(function () {
  return [this];
}, 1);
actual = [1].flatMap(function () {
  return [this];
}, null);
actual = [1].flatMap(function () {
  return [this];
}, true);
actual = [1].flatMap(function () {
  return [this];
}, a);
actual = [1].flatMap(function () {
  return [this];
}, void 0);