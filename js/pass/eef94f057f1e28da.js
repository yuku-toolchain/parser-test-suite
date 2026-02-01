var y = 2;
var z = 3;
var x = y << z;
if (x !== 16) {}
x = 0;
var y = 2;
var z = 3;
var x = y << z;
if (x !== 16) {}
x = 0;
var result;
var y = 2;
var z = 3;
eval("\u2028var\u2028x\u2028=\u2028y\u2028<<\u2028z\u2028; result = x;");
if (result !== 16) {}
result = 0;
var y = 2;
var z = 3;
eval("\u2029var\u2029x\u2029=\u2029y\u2029<<\u2029z\u2029; result = x;");
if (result !== 16) {}