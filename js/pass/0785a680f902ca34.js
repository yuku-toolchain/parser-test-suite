var FACTORY;
FACTORY = Function("this.prop=1;");
FACTORY.prototype.name = "fairy";
var instance;
instance = new FACTORY();
FACTORY.prototype = void 0;
try {
  instance instanceof FACTORY;
} catch (e) {
  if (!(e instanceof TypeError)) {}
}
if (instance.constructor !== FACTORY || instance.name !== "fairy") {}