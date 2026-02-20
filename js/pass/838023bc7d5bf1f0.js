var __instance = {
  toString: function () {
    return "function(){}";
  }
};
__instance.substring = String.prototype.substring;
if (__instance.substring(-Infinity, 8) !== "function") {}