var FACTORY = Function("var x =1; this.y=2;return \"OK\";");
var obj = new FACTORY();