var x;
x = 1;
x >>= undefined;
if (x !== 1) {}
x = undefined;
x >>= 1;
if (x !== 0) {}
x = new Number(1);
x >>= undefined;
if (x !== 1) {}
x = undefined;
x >>= new Number(1);
if (x !== 0) {}