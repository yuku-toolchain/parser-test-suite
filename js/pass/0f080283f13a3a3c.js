var x = 0;
if ((x = 1) <= x !== true) {}
var x = 1;
if (x <= (x = 0) !== false) {}