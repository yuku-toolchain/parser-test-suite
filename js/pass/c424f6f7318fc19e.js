var x = new Array(1, 0);
x.sort();
if (x.length !== 2) {}
if (x[0] !== 0) {}
if (x[1] !== 1) {}
var x = new Array(1, 0);
x.sort(undefined);
if (x.length !== 2) {}
if (x[0] !== 0) {}
if (x[1] !== 1) {}