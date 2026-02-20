var __instance = new Boolean();
__instance.charAt = String.prototype.charAt;
if (__instance.charAt(false) + __instance.charAt(true) + __instance.charAt(true + 1) !== "fal") {}