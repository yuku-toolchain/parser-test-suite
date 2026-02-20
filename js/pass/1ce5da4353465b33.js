if ((false || true) !== true) {}
if ((false || false) !== false) {}
var y = new Boolean(true);
if ((false || y) !== y) {}
var y = new Boolean(false);
if ((false || y) !== y) {}