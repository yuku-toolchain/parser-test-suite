var x;
x = 1;
x %= null;
if (isNaN(x) !== true) {}
x = null;
x %= 1;
if (x !== 0) {}
x = new Number(1);
x %= null;
if (isNaN(x) !== true) {}
x = null;
x %= new Number(1);
if (x !== 0) {}