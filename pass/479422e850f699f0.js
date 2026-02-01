if ((1 | undefined) !== 1) {}
if ((undefined | 1) !== 1) {}
if ((new Number(1) | undefined) !== 1) {}
if ((undefined | new Number(1)) !== 1) {}