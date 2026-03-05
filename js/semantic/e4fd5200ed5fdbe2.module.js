var __str__instance = new String("globglob");
if (!__str__instance.hasOwnProperty("length")) {}
if (__str__instance.length !== 8) {}
__str__instance.length = -1;
if (__str__instance.length !== 8) {}
with (__str__instance) length = 0;
if (__str__instance.length !== 8) {}
__str__instance.length++;
if (__str__instance.length !== 8) {}