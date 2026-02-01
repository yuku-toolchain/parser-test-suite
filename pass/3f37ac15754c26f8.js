var obj = {};
Date.prototype.get = function () {
  return "dateGetProperty";
};
var dateObj = new Date();
Object.defineProperty(obj, "property", dateObj);