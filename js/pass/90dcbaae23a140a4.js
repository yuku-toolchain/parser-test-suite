try {
  var x = [];
  x.length = NaN;
} catch (e) {}
try {
  x = [];
  x.length = Number.POSITIVE_INFINITY;
} catch (e) {}
try {
  x = [];
  x.length = Number.NEGATIVE_INFINITY;
} catch (e) {}
try {
  x = [];
  x.length = undefined;
} catch (e) {}