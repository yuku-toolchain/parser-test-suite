var __instance = new Boolean();
__instance.substring = String.prototype.substring;
if (__instance.substring(new Array(), new Boolean(1)) !== "f") {}