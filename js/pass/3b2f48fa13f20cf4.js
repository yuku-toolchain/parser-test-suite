var obj = {};
Object.prototype.get = function () {
  return "jsonGetProperty";
};
Object.defineProperty(obj, "property", JSON);