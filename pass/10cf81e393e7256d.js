__FACTORY.prototype.substring = String.prototype.substring;
var __instance = new __FACTORY(void 0);
if (__instance.substring(0, 100) !== "undefined") {}
function __FACTORY(value) {
  this.value = value;
  this.toString = function () {
    return this.value + '';
  };
}