var __str = new String(1.2345);
if (typeof __str !== "object") {}
if (__str.constructor !== String) {}
if (__str != "1.2345") {}
__str = new String(1.234567890);
if (typeof __str !== "object") {}
if (__str.constructor !== String) {}
if (__str != "1.23456789") {}
__str = new String(1.234500000000000000000000000);
if (typeof __str !== "object") {}
if (__str.constructor !== String) {}
if (__str != "1.2345") {}