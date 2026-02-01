try {
  new Array(-1);
} catch (e) {}
try {
  new Array(4294967296);
} catch (e) {}
try {
  new Array(4294967297);
} catch (e) {}