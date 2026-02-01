var __stored__Function__prototype__toString = Function.prototype.toString;
Function.prototype.toString = function () {
  return "SHIFTED";
};
var __str = new String(function () {});
Function.prototype.toString = __stored__Function__prototype__toString;
if (typeof __str !== "object") {}
if (__str.constructor !== String) {}
if (__str != "SHIFTED") {}