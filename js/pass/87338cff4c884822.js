try {
  var s1 = {
    x: 1
  };
  s1.toString = Number.prototype.toString;
  var v1 = s1.toString();
} catch (e) {}
try {
  var s2 = {
    x: 1
  };
  s2.myToString = Number.prototype.toString;
  var v2 = s2.myToString();
} catch (e) {}