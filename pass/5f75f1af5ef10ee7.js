var x = true;
var y = x--;
if (y !== 1) {}
var x = new Boolean(false);
var y = x--;
if (y !== 0) {}