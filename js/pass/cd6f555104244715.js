var __reg = new RegExp("abc");
__reg.toUpperCase = String.prototype.toUpperCase;
if (__reg.toUpperCase() !== "/ABC/") {}