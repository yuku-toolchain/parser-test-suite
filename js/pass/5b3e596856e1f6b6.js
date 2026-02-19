var __stored__Object__prototype__toString = Object.prototype.toString;
Object.prototype.toString = function () {
  return "SHIFTED";
};
var __str = new String({});
Object.prototype.toString = __stored__Object__prototype__toString;
if (typeof __str !== "object") {}
if (__str.constructor !== String) {}
if (__str != "SHIFTED") {}