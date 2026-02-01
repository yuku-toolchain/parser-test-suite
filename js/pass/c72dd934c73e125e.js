if (Number.MAX_VALUE / 0.9 !== Number.POSITIVE_INFINITY) {}
if (Number.MAX_VALUE / -0.9 !== Number.NEGATIVE_INFINITY) {}
if (Number.MAX_VALUE / 1 !== Number.MAX_VALUE) {}
if (Number.MAX_VALUE / -1 !== -Number.MAX_VALUE) {}
if (Number.MAX_VALUE / (Number.MAX_VALUE / 0.9) === Number.MAX_VALUE / Number.MAX_VALUE / 0.9) {}