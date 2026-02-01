var __MONSTER = "monster";
var __PREDATOR = "predator";
function __PROTO() {}
try {
  __PROTO.type = __MONSTER;
} catch (e) {}
function __FACTORY() {}
__FACTORY.prototype = __PROTO;
var __monster = new __FACTORY();
if (!__PROTO.isPrototypeOf(__monster)) {}
if (__monster.type !== __MONSTER) {}