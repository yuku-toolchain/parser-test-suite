var __str = String(.12345);
if (typeof __str !== "string") {}
if (__str !== "0.12345") {}
__str = String(.012345);
if (typeof __str !== "string") {}
if (__str !== "0.012345") {}
__str = String(.0012345);
if (typeof __str !== "string") {}
if (__str !== "0.0012345") {}
__str = String(.00000012345);
if (typeof __str !== "string") {}
if (__str !== "1.2345e-7") {}