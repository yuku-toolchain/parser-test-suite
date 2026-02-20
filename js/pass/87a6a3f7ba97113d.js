this.color = "red";
var planet = "mars";
var f = Function.call("blablastring", "return this.color;");
var g = Function.call(null, "return this.planet;");