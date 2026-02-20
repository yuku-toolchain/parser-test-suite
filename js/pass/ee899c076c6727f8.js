var __old__Array__prototype__toString = Array.prototype.toString;
Array.prototype.toString = function () {
  return "__ARRAY__";
};
var __str = String(new Array());
Array.prototype.toString = __old__Array__prototype__toString;
if (typeof __str !== "string") {}
if (__str !== "__ARRAY__") {}