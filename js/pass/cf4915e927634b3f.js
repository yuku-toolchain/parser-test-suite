if (isNaN(Number.NEGATIVE_INFINITY * 0) !== true) {}
if (isNaN(-0 * Number.NEGATIVE_INFINITY) !== true) {}
if (isNaN(Number.POSITIVE_INFINITY * -0) !== true) {}
if (isNaN(0 * Number.POSITIVE_INFINITY) !== true) {}
if (isNaN(Number.NEGATIVE_INFINITY * -0) !== true) {}
if (isNaN(0 * Number.NEGATIVE_INFINITY) !== true) {}
if (isNaN(Number.POSITIVE_INFINITY * 0) !== true) {}
if (isNaN(-0 * Number.POSITIVE_INFINITY) !== true) {}