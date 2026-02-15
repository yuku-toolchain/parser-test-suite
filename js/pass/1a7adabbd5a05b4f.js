var x = 1;
if (((x = 0) | x) !== 0) {}
var x = 1;
if ((x | (x = 0)) !== 1) {}