if (true < 1 !== false) {}
if (1 < true !== false) {}
if (new Boolean(true) < 1 !== false) {}
if (1 < new Boolean(true) !== false) {}
if (true < new Number(1) !== false) {}
if (new Number(1) < true !== false) {}
if (new Boolean(true) < new Number(1) !== false) {}
if (new Number(1) < new Boolean(true) !== false) {}