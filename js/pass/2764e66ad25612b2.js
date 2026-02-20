if (new Boolean(true) != new Boolean(true) !== true) {}
if (new Number(1) != new Number(1) !== true) {}
if (new String("x") != new String("x") !== true) {}
if (new Object() != new Object() !== true) {}
var x, y;
x = {};
y = x;
if (x != y !== false) {}
if (new Boolean(true) != new Number(1) !== true) {}
if (new Number(1) != new String("1") !== true) {}
if (new String("1") != new Boolean(true) !== true) {}