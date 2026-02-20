var x = 1;
if (((x = 0) ^ x) !== 0) {}
var x = 0;
if ((x ^ (x = 1)) !== 1) {}