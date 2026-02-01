var x = new Array(undefined, 1);
x.sort();
if (x.length !== 2) {}
if (x[0] !== 1) {}
if (x[1] !== undefined) {}
var x = new Array(1, undefined);
x.sort();
if (x.length !== 2) {}
if (x[0] !== 1) {}
if (x[1] !== undefined) {}