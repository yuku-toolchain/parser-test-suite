if (1 > 1.1 !== false) {}
if (1.1 > 1 !== true) {}
if (-1 > -1.1 !== true) {}
if (-1.1 > -1 !== false) {}
if (0.1 > 0 !== true) {}
if (0 > -0.1 !== true) {}
if (Number.MAX_VALUE > Number.MAX_VALUE / 2 !== true) {}
if (Number.MIN_VALUE * 2 > Number.MIN_VALUE !== true) {}