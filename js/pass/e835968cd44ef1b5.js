if (isNaN(Number.NaN / Number.NaN) !== true) {}
if (isNaN(Number.NaN / +0) !== true) {}
if (isNaN(Number.NaN / -0) !== true) {}
if (isNaN(Number.NaN / Number.POSITIVE_INFINITY) !== true) {}
if (isNaN(Number.NaN / Number.NEGATIVE_INFINITY) !== true) {}
if (isNaN(Number.NaN / Number.MAX_VALUE) !== true) {}
if (isNaN(Number.NaN / Number.MIN_VALUE) !== true) {}
if (isNaN(Number.NaN / 1) !== true) {}