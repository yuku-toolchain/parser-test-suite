var x;
x = true;
x += undefined;
if (isNaN(x) !== true) {}
x = undefined;
x += true;
if (isNaN(x) !== true) {}
x = new Boolean(true);
x += undefined;
if (isNaN(x) !== true) {}
x = undefined;
x += new Boolean(true);
if (isNaN(x) !== true) {}