var x;
x = 1;
x *= undefined;
if (isNaN(x) !== true) {}
x = undefined;
x *= 1;
if (isNaN(x) !== true) {}
x = new Number(1);
x *= undefined;
if (isNaN(x) !== true) {}
x = undefined;
x *= new Number(1);
if (isNaN(x) !== true) {}