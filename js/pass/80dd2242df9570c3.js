function f1() {
  return arguments.constructor.prototype;
}
try {
  if (f1() !== Object.prototype) {}
} catch (e) {}
var f2 = function () {
  return arguments.constructor.prototype;
};
try {
  if (f2() !== Object.prototype) {}
} catch (e) {}