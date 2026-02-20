var x;
x = 1;
x -= null;
if (x !== 1) {}
x = null;
x -= 1;
if (x !== -1) {}
x = new Number(1);
x -= null;
if (x !== 1) {}
x = null;
x -= new Number(1);
if (x !== -1) {}