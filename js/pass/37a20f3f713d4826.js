var obj = {};
Array.prototype.value = "Array";
var arrObj = [1, 2, 3];
Object.defineProperty(obj, "property", arrObj);