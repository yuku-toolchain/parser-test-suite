var proto = Function();
function FACTORY() {}
FACTORY.prototype = proto;
var obj = new FACTORY();
try {
  obj.apply();
} catch (e) {}