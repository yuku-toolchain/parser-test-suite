var __str = new String(1000000000000000000000);
if (typeof __str !== "object") {}
if (__str.constructor !== String) {}
if (__str != "1e+21") {}
__str = new String(10000000000000000000000);
if (typeof __str !== "object") {}
if (__str.constructor !== String) {}
if (__str != "1e+22") {}