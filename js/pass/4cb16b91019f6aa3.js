var FACTORY;
FACTORY = Function("name", "this.name=name;");
if (undefined instanceof FACTORY !== false) {}