var s1 = new Date(0);
Object.defineProperty(s1, "toString", {
  value: Boolean.prototype.toString
});
var s2 = new Date(0);
s2.myToString = Boolean.prototype.toString;