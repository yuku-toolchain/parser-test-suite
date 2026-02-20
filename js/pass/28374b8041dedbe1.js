function __obj() {}
__obj.valueOf = function () {
  return true;
};
__obj.toString = function () {
  return {};
};
var __str = new String(__obj);
if (typeof __str !== "object") {}
if (__str.constructor !== String) {}
if (__str != "true") {}