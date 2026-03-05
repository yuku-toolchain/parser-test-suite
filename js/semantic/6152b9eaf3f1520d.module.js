if (delete __variable) {}
if (delete this["__variable"]) {}
var __variable;
var __variable = "defined";
if (delete __variable | delete this["__variable"]) {}
if (__variable !== "defined" | this["__variable"] !== "defined") {}