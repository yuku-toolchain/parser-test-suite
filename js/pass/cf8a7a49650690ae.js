if (isNaN(Number.NaN - 1) !== true) {}
if (isNaN(1 - Number.NaN) !== true) {}
if (isNaN(Number.NaN - Number.POSITIVE_INFINITY) !== true) {}
if (isNaN(Number.POSITIVE_INFINITY - Number.NaN) !== true) {}
if (isNaN(Number.NaN - Number.NEGATIVE_INFINITY) !== true) {}
if (isNaN(Number.NEGATIVE_INFINITY - Number.NaN) !== true) {}