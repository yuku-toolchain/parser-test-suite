var obj = {};
Date.prototype.value = "Date";
var dateObj = new Date();
Object.defineProperty(obj, "property", dateObj);