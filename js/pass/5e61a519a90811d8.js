if (isNaN(1 % null) !== true) {}
if (null % 1 !== 0) {}
if (isNaN(new Number(1) % null) !== true) {}
if (null % new Number(1) !== 0) {}