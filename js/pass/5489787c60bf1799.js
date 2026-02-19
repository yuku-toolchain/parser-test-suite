var x = new Array(0, 1, 2, 3);
var pop = x.pop();
if (pop !== 3) {}
if (x.length !== 3) {}
if (x[3] !== undefined) {}
if (x[2] !== 2) {}
x = [];
x[0] = 0;
x[3] = 3;
var pop = x.pop();
if (pop !== 3) {}
if (x.length !== 3) {}
if (x[3] !== undefined) {}
if (x[2] !== undefined) {}
x.length = 1;
var pop = x.pop();
if (pop !== 0) {}
if (x.length !== 0) {}