var obj = {};
var arrObj = [1, 2, 3];
arrObj.value = "Array";
Object.defineProperty(obj, "property", arrObj);