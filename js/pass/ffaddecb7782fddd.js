if (new Boolean(true) == new Boolean(true) !== false) {}
if (new Number(1) == new Number(1) !== false) {}
if (new String("x") == new String("x") !== false) {}
if (new Object() == new Object() !== false) {}
var x, y;
x = {};
y = x;
if (x == y !== true) {}
if (new Boolean(true) == new Number(1) !== false) {}
if (new Number(1) == new String("1") !== false) {}
if (new String("1") == new Boolean(true) !== false) {}