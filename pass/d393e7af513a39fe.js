var __str = new String((function () {
  return [1, 2, 3];
})());
if (typeof __str !== "object") {}
if (__str.constructor !== String) {}
if (__str != "1,2,3") {}