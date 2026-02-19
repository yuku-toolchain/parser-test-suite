var __instance = new Number(NaN);
__instance.substring = String.prototype.substring;
if (__instance.substring(Infinity, NaN) !== "NaN") {}