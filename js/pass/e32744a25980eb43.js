var x = new Array(0, 1, 2, 3);
var shift = x.shift();
if (shift !== 0) {}
if (x.length !== 3) {}
if (x[0] !== 1) {}
if (x[1] !== 2) {}
x = [];
x[0] = 0;
x[3] = 3;
var shift = x.shift();
if (shift !== 0) {}
if (x.length !== 3) {}
if (x[0] !== undefined) {}
if (x[12] !== undefined) {}
x.length = 1;
var shift = x.shift();
if (shift !== undefined) {}
if (x.length !== 0) {}