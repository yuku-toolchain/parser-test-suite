function __FACTORY() {
  this.toString = function () {
    return "wizard";
  };
}
__FACTORY.prototype.charAt = String.prototype.charAt;
var __instance = new __FACTORY();
if (__instance.charAt(eval("1"), true, null, {}) !== "i") {}