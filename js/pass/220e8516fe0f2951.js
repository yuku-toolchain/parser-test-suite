Array.prototype[1] = 1;
var x = [0];
x.length = 2;
if (x.toString() !== "0,1") {}