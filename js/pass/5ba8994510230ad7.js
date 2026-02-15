var __str = new String(.12345);
if (typeof __str !== "object") {}
if (__str.constructor !== String) {}
if (__str != "0.12345") {}
__str = new String(.012345);
if (typeof __str !== "object") {}
if (__str.constructor !== String) {}
if (__str != "0.012345") {}
__str = new String(.0012345);
if (typeof __str !== "object") {}
if (__str.constructor !== String) {}
if (__str != "0.0012345") {}
__str = new String(.00000012345);
if (typeof __str !== "object") {}
if (__str.constructor !== String) {}
if (__str != "1.2345e-7") {}