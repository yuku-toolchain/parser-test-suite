var __instance = Math;
__instance.test = RegExp.prototype.test;
try {
  __instance.test("message to investigate");
} catch (e) {}