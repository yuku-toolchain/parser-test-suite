var x = 0;
if ((x = 1) >> x !== 0) {}
var x = -4;
if (x >> (x = 1) !== -2) {}