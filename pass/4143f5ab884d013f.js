var x = true;
--x;
if (x !== 1 - 1) {}
var x = new Boolean(false);
--x;
if (x !== 0 - 1) {}