try {
  var n = Number.prototype.toString(0);
} catch (e) {}
try {
  var n = new Number().toString(0);
} catch (e) {}
try {
  var n = new Number(0).toString(0);
} catch (e) {}
try {
  var n = new Number(-1).toString(0);
} catch (e) {}
try {
  var n = new Number(1).toString(0);
} catch (e) {}
try {
  var n = new Number(Number.NaN).toString(0);
} catch (e) {}
try {
  var n = new Number(Number.POSITIVE_INFINITY).toString(0);
} catch (e) {}
try {
  var n = new Number(Number.NEGATIVE_INFINITY).toString(0);
} catch (e) {}