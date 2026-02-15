if ((1.).toString() !== "1") {}
if ((1.1).toFixed(5) !== "1.10000") {}
if ((1)["toString"]() !== "1") {}
if ((1.)["toFixed"](5) !== "1.00000") {}
if (new Number(1).toString() !== "1") {}
if (new Number(1)["toFixed"](5) !== "1.00000") {}