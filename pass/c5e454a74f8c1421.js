function __FACTORY() {
  this.toString = function () {
    return "wizard";
  };
}
__FACTORY.prototype.charCodeAt = String.prototype.charCodeAt;
var __instance = new __FACTORY();
if (__instance.charCodeAt(eval("1"), true, null, {}) !== 0x69) {}