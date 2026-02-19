var x = [];
var reverse = x.reverse();
if (reverse !== x) {}
x = [];
x[0] = 1;
var reverse = x.reverse();
if (reverse !== x) {}
x = new Array(1, 2);
var reverse = x.reverse();
if (reverse !== x) {}
if (x[0] !== 2) {}
if (x[1] !== 1) {}
if (x.length !== 2) {}