function FACTORY() {}
FACTORY.prototype = Function.prototype;
var obj = new FACTORY();
try {
  obj.call();
} catch (e) {}