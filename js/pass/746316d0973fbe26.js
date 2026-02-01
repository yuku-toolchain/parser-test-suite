var obj = {};
this.get = function () {
  return "globalGetProperty";
};
Object.defineProperty(obj, "property", this);