var x = "1";
x--;
if (x !== 1 - 1) {}
var x = "x";
x--;
if (isNaN(x) !== true) {}
var x = new Number("-1");
x--;
if (x !== -1 - 1) {}