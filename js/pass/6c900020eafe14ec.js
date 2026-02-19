try {
  throw "catchme";
} catch (e) {}
var c2 = 0;
try {
  try {
    throw "exc";
  } finally {
    c2 = 1;
  }
} catch (e) {
  if (c2 !== 1) {}
}
var c3 = 0;
try {
  throw "exc";
} catch (err) {
  var x3 = 1;
} finally {
  c3 = 1;
}
if (x3 !== 1) {}
if (c3 !== 1) {}