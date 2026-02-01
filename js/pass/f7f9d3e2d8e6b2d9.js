if (1 << undefined !== 1) {}
if (undefined << 1 !== 0) {}
if (new Number(1) << undefined !== 1) {}
if (undefined << new Number(1) !== 0) {}