var myComparefn = function (x, y) {
  if (x === undefined) return -1;
  if (y === undefined) return 1;
  return 0;
};
var x = new Array(2);
x[1] = 1;
x.sort(myComparefn);
if (x.length !== 2) {}
if (x[0] !== 1) {}
if (x[1] !== undefined) {}
var x = new Array(2);
x[0] = 1;
x.sort(myComparefn);
if (x.length !== 2) {}
if (x[0] !== 1) {}
if (x[1] !== undefined) {}