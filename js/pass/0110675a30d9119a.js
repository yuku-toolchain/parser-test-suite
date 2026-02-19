var x;
x = true;
x >>= 1;
if (x !== 0) {}
x = 1;
x >>= true;
if (x !== 0) {}
x = new Boolean(true);
x >>= 1;
if (x !== 0) {}
x = 1;
x >>= new Boolean(true);
if (x !== 0) {}
x = true;
x >>= new Number(1);
if (x !== 0) {}
x = new Number(1);
x >>= true;
if (x !== 0) {}
x = new Boolean(true);
x >>= new Number(1);
if (x !== 0) {}
x = new Number(1);
x >>= new Boolean(true);
if (x !== 0) {}