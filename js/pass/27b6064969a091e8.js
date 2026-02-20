try {
  y;
} catch (e) {}
var c2 = 0;
try {
  try {
    someValue;
  } finally {
    c2 = 1;
  }
} catch (e) {
  if (c2 !== 1) {}
}
var c3 = 0, x3 = 0;
try {
  x3 = someValue;
} catch (err) {
  x3 = 1;
} finally {
  c3 = 1;
}
if (x3 !== 1) {}
if (c3 !== 1) {}