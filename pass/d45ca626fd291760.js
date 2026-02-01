try {
  var s1 = new Boolean();
  s1.toString = Number.prototype.toString;
  var v1 = s1.toString();
} catch (e) {}
try {
  var s2 = new Boolean();
  s2.myToString = Number.prototype.toString;
  var v2 = s2.myToString();
} catch (e) {}