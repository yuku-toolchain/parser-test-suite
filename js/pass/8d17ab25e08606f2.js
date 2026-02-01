var __str = String(true);
if (typeof __str !== "string") {}
if (__str !== "true") {}
__str = String(false);
if (typeof __str !== "string") {}
if (__str !== "false") {}
__str = String(Boolean(true));
if (typeof __str !== "string") {}
if (__str !== "true") {}
__str = String(Boolean(false));
if (typeof __str !== "string") {}
if (__str !== "false") {}