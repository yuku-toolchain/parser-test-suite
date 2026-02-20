if (true <= 1 !== true) {}
if (1 <= true !== true) {}
if (new Boolean(true) <= 1 !== true) {}
if (1 <= new Boolean(true) !== true) {}
if (true <= new Number(1) !== true) {}
if (new Number(1) <= true !== true) {}
if (new Boolean(true) <= new Number(1) !== true) {}
if (new Number(1) <= new Boolean(true) !== true) {}