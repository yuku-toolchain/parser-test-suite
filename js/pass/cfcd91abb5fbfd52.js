var obj = {};
Object.prototype.get = function () {
  return "mathGetProperty";
};
Object.defineProperty(obj, "property", Math);