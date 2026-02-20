var FACTORY;
FACTORY = Function("this.name=\"root\"");
FACTORY.prototype.type = 1;
var instance;
instance = new FACTORY();
if (!(instance instanceof FACTORY)) {}