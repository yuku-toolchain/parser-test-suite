var f = Function.call(this, "return planet;");
var g = Function.call(this, "return color;");
var planet = "mars";
try {
  g();
} catch (e) {}
this.color = "red";