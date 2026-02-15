try {
  var x = 0;
} catch (e) {}
var c1 = 0;
try {
  var x1 = 1;
} finally {
  c1 = 1;
}
if (x1 !== 1) {}
if (c1 !== 1) {}
var c2 = 0;
try {
  var x2 = 1;
} catch (e) {} finally {
  c2 = 1;
}
if (x2 !== 1) {}
if (c2 !== 1) {}