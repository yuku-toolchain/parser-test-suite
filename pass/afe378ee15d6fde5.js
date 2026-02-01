var FACTORY;
FACTORY = new Function();
FACTORY.prototype = undefined;
var obj;
obj = {};
try {
  obj instanceof FACTORY;
} catch (e) {
  if (!(e instanceof TypeError)) {}
}