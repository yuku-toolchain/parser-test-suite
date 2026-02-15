var proto = Function();
function FACTORY() {}
FACTORY.prototype = proto;
var obj = new FACTORY();
try {
  obj.call();
} catch (e) {}