var x;
x = true;
x &= true;
if (x !== 1) {}
x = new Boolean(true);
x &= true;
if (x !== 1) {}
x = true;
x &= new Boolean(true);
if (x !== 1) {}
x = new Boolean(true);
x &= new Boolean(true);
if (x !== 1) {}