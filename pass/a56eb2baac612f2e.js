var y = 3;
var z = 2;
var x = y - z;
if (x !== 1) {}
x = 0;
var y = 3;
var z = 2;
var x = y - z;
if (x !== 1) {}
x = 0;
var result;
var y = 3;
var z = 2;
eval("\u2028var\u2028x\u2028=\u2028y\u2028-\u2028z\u2028; result = x;");
if (result !== 1) {}
result = 0;
var y = 3;
var z = 2;
eval("\u2029var\u2029x\u2029=\u2029y\u2029-\u2029z\u2029; result = x;");
if (result !== 1) {}