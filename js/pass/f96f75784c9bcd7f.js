if (true + 1 !== 2) {}
if (1 + true !== 2) {}
if (new Boolean(true) + 1 !== 2) {}
if (1 + new Boolean(true) !== 2) {}
if (true + new Number(1) !== 2) {}
if (new Number(1) + true !== 2) {}
if (new Boolean(true) + new Number(1) !== 2) {}
if (new Number(1) + new Boolean(true) !== 2) {}