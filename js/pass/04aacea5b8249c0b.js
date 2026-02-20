var a = [0];
a.length = 3;
Array.prototype[2] = 2;
var b = a.concat();