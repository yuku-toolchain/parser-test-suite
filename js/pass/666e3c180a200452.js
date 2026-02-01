if (true << true !== 2) {}
if (new Boolean(true) << true !== 2) {}
if (true << new Boolean(true) !== 2) {}
if (new Boolean(true) << new Boolean(true) !== 2) {}