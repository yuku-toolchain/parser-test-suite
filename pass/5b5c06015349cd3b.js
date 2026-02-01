var x = 0;
if ((x = 1) % x !== 0) {}
var x = 1;
if (x % (x = 2) !== 1) {}