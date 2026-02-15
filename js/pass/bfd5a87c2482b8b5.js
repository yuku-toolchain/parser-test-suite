if (isNaN(true % null) !== true) {}
if (null % true !== 0) {}
if (isNaN(new Boolean(true) % null) !== true) {}
if (null % new Boolean(true) !== 0) {}