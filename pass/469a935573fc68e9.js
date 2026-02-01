var x = {};
x.concat = Array.prototype.concat;
var y = new Object();
var z = new Array(1, 2);
var arr = x.concat(y, z, -1, true, "NaN");
arr.getClass = Object.prototype.toString;