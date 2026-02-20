var __instance = new Object(42);
__instance.concat = String.prototype.concat;
if (__instance.concat(false, true) !== "42falsetrue") {}