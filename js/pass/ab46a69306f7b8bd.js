var s1 = new Date(0);
Object.defineProperty(s1, "toString", {
  value: Number.prototype.toString
});
try {
  var v1 = s1.toString();
} catch (e) {}
var s2 = new Date(0);
s2.myToString = Number.prototype.toString;
try {
  var v2 = s2.myToString();
} catch (e) {}