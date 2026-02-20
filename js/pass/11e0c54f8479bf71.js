var __instance = {
  toString: function () {
    return "one";
  }
};
__instance.concat = String.prototype.concat;
if (__instance.concat("two", x) !== "onetwoundefined") {}
var x;