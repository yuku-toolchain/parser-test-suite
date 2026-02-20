var __PLANT = "flower";
var __ROSE = "rose";
function __PROTO() {}
try {
  __PROTO.type = __PLANT;
} catch (e) {}
function __FACTORY() {}
__FACTORY.prototype = __PROTO;
var __rose = new __FACTORY();
try {
  __rose();
} catch (e) {
  if (!(e instanceof TypeError)) {}
}