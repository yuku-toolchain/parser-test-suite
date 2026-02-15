var x;
x = 1;
x /= 1;
if (x !== 1) {}
x = new Number(1);
x /= 1;
if (x !== 1) {}
x = 1;
x /= new Number(1);
if (x !== 1) {}
x = new Number(1);
x /= new Number(1);
if (x !== 1) {}