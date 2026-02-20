if (true >>> undefined !== 1) {}
if (undefined >>> true !== 0) {}
if (new Boolean(true) >>> undefined !== 1) {}
if (undefined >>> new Boolean(true) !== 0) {}