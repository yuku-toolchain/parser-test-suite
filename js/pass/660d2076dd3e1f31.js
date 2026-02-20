var x;
x = 1;
x /= null;
if (x !== Number.POSITIVE_INFINITY) {}
x = null;
x /= 1;
if (x !== 0) {}
x = new Number(1);
x /= null;
if (x !== Number.POSITIVE_INFINITY) {}
x = null;
x /= new Number(1);
if (x !== 0) {}