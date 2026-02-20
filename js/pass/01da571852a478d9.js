var FACTORY;
FACTORY = Function("name", "this.name=name;");
if (false instanceof FACTORY !== false) {}