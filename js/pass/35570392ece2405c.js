var toString = function () {
  return "__THIS__";
};
var __str = String(this);
if (typeof __str !== "string") {}
if (__str !== "__THIS__") {}