if (!(new Object() !== new Object())) {}
if (!(new Object(true) !== new Object(true))) {}
if (!(new Object(false) !== new Object(false))) {}
if (!(new Object(+0) !== new Object(-0))) {}
var x, y;
x = {};
y = x;
if (x !== y) {}
if (!(new Boolean(true) !== new Number(1))) {}
if (!(new Number(1) !== new String("1"))) {}
if (!(new String("1") !== new Boolean(true))) {}