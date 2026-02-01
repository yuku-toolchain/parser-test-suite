var x;
x = 1;
x += 1;
if (x !== 2) {}
x = new Number(1);
x += 1;
if (x !== 2) {}
x = 1;
x += new Number(1);
if (x !== 2) {}
x = new Number(1);
x += new Number(1);
if (x !== 2) {}