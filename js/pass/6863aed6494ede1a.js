var x = {};
var y;
if (eval("y = x") !== x) {}
if (eval("x") !== x) {}