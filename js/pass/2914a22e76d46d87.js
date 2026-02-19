var FACTORY;
FACTORY = Function("name", "this.name=name;");
if (null instanceof FACTORY !== false) {}