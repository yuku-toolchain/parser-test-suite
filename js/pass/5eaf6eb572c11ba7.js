try {
  var n = Number.prototype.toString(null);
} catch (e) {}
try {
  var n = new Number().toString(null);
} catch (e) {}
try {
  var n = new Number(0).toString(null);
} catch (e) {}
try {
  var n = new Number(-1).toString(null);
} catch (e) {}
try {
  var n = new Number(1).toString(null);
} catch (e) {}
try {
  var n = new Number(Number.NaN).toString(null);
} catch (e) {}
try {
  var n = new Number(Number.POSITIVE_INFINITY).toString(null);
} catch (e) {}
try {
  var n = new Number(Number.NEGATIVE_INFINITY).toString(null);
} catch (e) {}