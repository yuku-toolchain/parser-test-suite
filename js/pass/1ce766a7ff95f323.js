var x = new Array(0, 1, 2, 3);
if (x.join("") !== "0123") {}
x = new Array(0, 1, 2, 3);
if (x.join("\\") !== "0\\1\\2\\3") {}
if (x.join("&") !== "0&1&2&3") {}
if (x.join(true) !== "0true1true2true3") {}
if (x.join(Infinity) !== "0Infinity1Infinity2Infinity3") {}
if (x.join(null) !== "0null1null2null3") {}
if (x.join(undefined) !== "0,1,2,3") {}
if (x.join(NaN) !== "0NaN1NaN2NaN3") {}