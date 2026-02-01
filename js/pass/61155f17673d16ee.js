var __instance = new Object(42);
__instance.charCodeAt = String.prototype.charCodeAt;
if (__instance.charCodeAt(false) !== 52 || __instance.charCodeAt(true) !== 50) {}