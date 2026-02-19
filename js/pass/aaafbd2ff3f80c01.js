if (true >>> 1 !== 0) {}
if (1 >>> true !== 0) {}
if (new Boolean(true) >>> 1 !== 0) {}
if (1 >>> new Boolean(true) !== 0) {}
if (true >>> new Number(1) !== 0) {}
if (new Number(1) >>> true !== 0) {}
if (new Boolean(true) >>> new Number(1) !== 0) {}
if (new Number(1) >>> new Boolean(true) !== 0) {}