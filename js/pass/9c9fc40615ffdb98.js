var __str = String(1 / "a");
if (typeof __str !== "string") {}
if (__str !== "NaN") {}
__str = String("b" * null);
if (typeof __str !== "string") {}
if (__str !== "NaN") {}
__str = String(Number.NaN);
if (typeof __str !== "string") {}
if (__str !== "NaN") {}