if (isNaN(1 / undefined) !== true) {}
if (isNaN(undefined / 1) !== true) {}
if (isNaN(new Number(1) / undefined) !== true) {}
if (isNaN(undefined / new Number(1)) !== true) {}