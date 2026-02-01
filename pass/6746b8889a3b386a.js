try {
  var x = [];
  x.length = 4294967296;
} catch (e) {}
try {
  x = [];
  x.length = -1;
} catch (e) {}
try {
  x = [];
  x.length = 1.5;
} catch (e) {}