if (1 >>> null !== 1) {}
if (null >>> 1 !== 0) {}
if (new Number(1) >>> null !== 1) {}
if (null >>> new Number(1) !== 0) {}