var __instance = new Object(42);
__instance.charAt = String.prototype.charAt;
if (__instance.charAt(false) + __instance.charAt(true) !== "42") {}