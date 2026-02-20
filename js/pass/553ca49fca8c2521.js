var x = [];
x[0] = true;
x[2] = Infinity;
x[4] = undefined;
x[5] = undefined;
x[8] = "NaN";
x[9] = "-1";
var reverse = x.reverse();
if (reverse !== x) {}
if (x[0] !== "-1") {}
if (x[1] !== "NaN") {}
if (x[2] !== undefined) {}
if (x[3] !== undefined) {}
if (x[4] !== undefined) {}
if (x[5] !== undefined) {}
if (x[6] !== undefined) {}
if (x[7] !== Infinity) {}
if (x[8] !== undefined) {}
if (x[9] !== true) {}
x.length = 9;
var reverse = x.reverse();
if (reverse !== x) {}
if (x[0] !== undefined) {}
if (x[1] !== Infinity) {}
if (x[2] !== undefined) {}
if (x[3] !== undefined) {}
if (x[4] !== undefined) {}
if (x[5] !== undefined) {}
if (x[6] !== undefined) {}
if (x[7] !== "NaN") {}
if (x[8] !== "-1") {}