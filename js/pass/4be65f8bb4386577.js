if ((true | 1) !== 1) {}
if ((1 | true) !== 1) {}
if ((new Boolean(true) | 1) !== 1) {}
if ((1 | new Boolean(true)) !== 1) {}
if ((true | new Number(1)) !== 1) {}
if ((new Number(1) | true) !== 1) {}
if ((new Boolean(true) | new Number(1)) !== 1) {}
if ((new Number(1) | new Boolean(true)) !== 1) {}