var x = new Array();
var unshift = x.unshift(1);
if (unshift !== 1) {}
if (x[0] !== 1) {}
var unshift = x.unshift();
if (unshift !== 1) {}
if (x[1] !== undefined) {}
var unshift = x.unshift(-1);
if (unshift !== 2) {}
if (x[0] !== -1) {}
if (x[1] !== 1) {}
if (x.length !== 2) {}