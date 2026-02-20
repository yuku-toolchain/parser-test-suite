var x;
x = true;
x &= undefined;
if (x !== 0) {}
x = undefined;
x &= true;
if (x !== 0) {}
x = new Boolean(true);
x &= undefined;
if (x !== 0) {}
x = undefined;
x &= new Boolean(true);
if (x !== 0) {}