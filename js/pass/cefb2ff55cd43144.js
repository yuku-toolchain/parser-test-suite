var obj = {};
var dateObj = new Date(0);
dateObj.get = function () {
  return "dateGetProperty";
};
Object.defineProperty(obj, "property", dateObj);