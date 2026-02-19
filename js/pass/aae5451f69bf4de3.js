var obj = {};
Math.get = function () {
  return "mathGetProperty";
};
Object.defineProperty(obj, "property", Math);