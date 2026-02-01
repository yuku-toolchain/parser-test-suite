var FACTORY;
FACTORY = Function("name", "this.name=name;");
if ("1" instanceof FACTORY !== false) {}