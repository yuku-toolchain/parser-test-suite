var FACTORY;
FACTORY = Function("name", "this.name=name;");
if (x instanceof FACTORY !== false) {}
var x;