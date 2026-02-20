var x = new Array();
var push = x.push(1);
if (push !== 1) {}
if (x[0] !== 1) {}
var push = x.push();
if (push !== 1) {}
if (x[1] !== undefined) {}
var push = x.push(-1);
if (push !== 2) {}
if (x[1] !== -1) {}
if (x.length !== 2) {}