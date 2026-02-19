try {
  var s1 = new Object();
  s1.valueOf = Number.prototype.valueOf;
  var v1 = s1.valueOf();
} catch (e) {}
try {
  var s2 = new Object();
  s2.myValueOf = Number.prototype.valueOf;
  var v2 = s2.myValueOf();
} catch (e) {}