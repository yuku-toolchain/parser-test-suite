var __reg = new RegExp("abc");
__reg.toLocaleUpperCase = String.prototype.toLocaleUpperCase;
if (__reg.toLocaleUpperCase() !== "/ABC/") {}