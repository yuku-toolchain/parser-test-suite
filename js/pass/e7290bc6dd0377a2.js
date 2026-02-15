var x = [];
if (x.length !== 0) {}
x[0] = 0;
var unshift = x.unshift(true, Number.POSITIVE_INFINITY, "NaN", "1", -1);
if (unshift !== 6) {}
if (x[5] !== 0) {}
if (x[0] !== true) {}
if (x[1] !== Number.POSITIVE_INFINITY) {}
if (x[2] !== "NaN") {}
if (x[3] !== "1") {}
if (x[4] !== -1) {}
if (x.length !== 6) {}