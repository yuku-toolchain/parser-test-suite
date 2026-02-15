var FACTORY;
FACTORY = Function("name", "this.name=name;");
if (true instanceof FACTORY !== false) {}