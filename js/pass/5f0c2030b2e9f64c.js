if ((-1 || 1) !== -1) {}
if ((1 || new Number(0)) !== 1) {}
if ((-1 || NaN) !== -1) {}
var x = new Number(-1);
if ((x || new Number(0)) !== x) {}
var x = new Number(NaN);
if ((x || new Number(1)) !== x) {}
var x = new Number(0);
if ((x || new Number(NaN)) !== x) {}