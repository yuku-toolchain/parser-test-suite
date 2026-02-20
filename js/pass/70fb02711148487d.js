if (Number.NaN << 0 !== +0) {} else if (1 / (Number.NaN << 0) !== Number.POSITIVE_INFINITY) {}
if (Number("abc") << 0 !== +0) {} else if (1 / (0 << 0) !== Number.POSITIVE_INFINITY) {}
if (0 << 0 !== +0) {} else if (1 / (0 << 0) !== Number.POSITIVE_INFINITY) {}
if (-0 << 0 !== +0) {} else if (1 / (-0 << 0) !== Number.POSITIVE_INFINITY) {}
if (Number.POSITIVE_INFINITY << 0 !== +0) {} else if (1 / (Number.POSITIVE_INFINITY << 0) !== Number.POSITIVE_INFINITY) {}
if (Number.NEGATIVE_INFINITY << 0 !== +0) {} else if (1 / (Number.NEGATIVE_INFINITY << 0) !== Number.POSITIVE_INFINITY) {}