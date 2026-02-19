var s1 = new Date(0);
Object.defineProperty(s1, "valueOf", {
  value: Number.prototype.valueOf
});
try {
  var v1 = s1.valueOf();
} catch (e) {}
var s2 = new Date(0);
s2.myValueOf = Number.prototype.valueOf;
try {
  var v2 = s2.myValueOf();
} catch (e) {}