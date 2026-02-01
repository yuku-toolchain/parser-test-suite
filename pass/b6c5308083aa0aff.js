function FACTORY() {}
FACTORY.prototype = Function.prototype;
var obj = new FACTORY();
try {
  obj.apply();
} catch (e) {}