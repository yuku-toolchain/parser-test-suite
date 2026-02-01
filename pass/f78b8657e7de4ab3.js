function __FACTORY() {}
__FACTORY.prototype.toString = function () {
  return "tostr";
};
var __obj = new __FACTORY();
var __str = new String(__obj);
if (typeof __str !== "object") {}
if (__str.constructor !== String) {}
if (__str != "tostr") {}