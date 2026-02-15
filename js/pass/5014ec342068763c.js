var x = 0;
if ((x = 1) > x !== false) {}
var x = 1;
if (x > (x = 0) !== true) {}