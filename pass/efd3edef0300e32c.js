var __instance = new Boolean();
__instance.charCodeAt = String.prototype.charCodeAt;
if (__instance.charCodeAt(false) !== 0x66) {}
if (__instance.charCodeAt(true) !== 0x61) {}
if (__instance.charCodeAt(true + 1) !== 0x6C) {}