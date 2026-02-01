var x = [];
if (x.length !== 0) {}
x[0] = 0;
var push = x.push(true, Number.POSITIVE_INFINITY, "NaN", "1", -1);
if (push !== 6) {}
if (x[0] !== 0) {}
if (x[1] !== true) {}
if (x[2] !== Number.POSITIVE_INFINITY) {}
if (x[3] !== "NaN") {}
if (x[4] !== "1") {}
if (x[5] !== -1) {}
if (x.length !== 6) {}