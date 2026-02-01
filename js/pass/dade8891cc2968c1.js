var __re = /0./;
__re.lastIndex = 0;
var __num = 10203040506070809000;
Number.prototype.match = String.prototype.match;
if (__num.match(__re)[0] !== "02") {}
if (__num.match(__re).length !== 1) {}
if (__num.match(__re).index !== 1) {}
if (__num.match(__re).input !== String(__num)) {}