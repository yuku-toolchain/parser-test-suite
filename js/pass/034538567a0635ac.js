var x = {};
x.concat = Array.prototype.concat;
var arr = x.concat();
arr.getClass = Object.prototype.toString;