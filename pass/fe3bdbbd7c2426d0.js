var x;
x = true;
x %= null;
if (isNaN(x) !== true) {}
x = null;
x %= true;
if (x !== 0) {}
x = new Boolean(true);
x %= null;
if (isNaN(x) !== true) {}
x = null;
x %= new Boolean(true);
if (x !== 0) {}