var __MONSTER = "monster";
var __PREDATOR = "predator";
var __PROTO = function () {};
try {
  __PROTO.type = __MONSTER;
} catch (e) {}
var __FACTORY = function () {};
__FACTORY.prototype = __PROTO;
var __monster = new __FACTORY();
if (!__PROTO.isPrototypeOf(__monster)) {}
if (__monster.type !== __MONSTER) {}