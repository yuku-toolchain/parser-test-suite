var __str = String(1 / 0);
if (typeof __str !== "string") {}
if (__str !== "Infinity") {}
__str = String(-1 / 0);
if (typeof __str !== "string") {}
if (__str !== "-Infinity") {}
__str = String(Infinity);
if (typeof __str !== "string") {}
if (__str !== "Infinity") {}
__str = String(-Infinity);
if (typeof __str !== "string") {}
if (__str !== "-Infinity") {}
__str = String(Number.POSITIVE_INFINITY);
if (typeof __str !== "string") {}
if (__str !== "Infinity") {}
__str = String(Number.NEGATIVE_INFINITY);
if (typeof __str !== "string") {}
if (__str !== "-Infinity") {}