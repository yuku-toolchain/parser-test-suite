var x;
x = true;
x /= null;
if (x !== Number.POSITIVE_INFINITY) {}
x = null;
x /= true;
if (x !== 0) {}
x = new Boolean(true);
x /= null;
if (x !== Number.POSITIVE_INFINITY) {}
x = null;
x /= new Boolean(true);
if (x !== 0) {}