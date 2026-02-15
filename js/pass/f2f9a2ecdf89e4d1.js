__FACTORY.prototype.toString = function () {
  return this.value + '';
};
var __instance = new __FACTORY(void 0);
if (__instance.slice(0, 100) !== "undefined") {}
function __FACTORY(value) {
  (this.value = value, this.slice = String.prototype.slice);
}