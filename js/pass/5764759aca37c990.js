var __str__instance = new String("ABC\u0041\u0042\u0043");
if (__str__instance.length !== 6) {}
__str__instance = new String();
if (__str__instance.length !== 0) {}