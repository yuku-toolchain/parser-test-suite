var __instance = new Boolean();
__instance.concat = String.prototype.concat;
if (__instance.concat("\u0041", true, true + 1) !== "falseAtrue2") {}