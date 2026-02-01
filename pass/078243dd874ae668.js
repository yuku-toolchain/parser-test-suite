var x = 1;
if ((x = 0) >= x !== true) {}
var x = 0;
if (x >= (x = 1) !== false) {}