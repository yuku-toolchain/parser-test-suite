var obj = {};
Number.prototype.value = "Number";
var numObj = new Number(-2);
Object.defineProperty(obj, "property", numObj);