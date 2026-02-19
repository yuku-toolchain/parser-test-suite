var obj = {};
var dateObj = new Date(0);
dateObj.value = "Date";
Object.defineProperty(obj, "property", dateObj);