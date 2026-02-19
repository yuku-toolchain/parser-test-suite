var __instance = new Array(1, 2, 3, 4, 5);
__instance.substring = String.prototype.substring;
if (__instance.substring('4', '5') !== "3") {}