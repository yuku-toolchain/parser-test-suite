if ((true || true) !== true) {}
if ((true || false) !== true) {}
var x = new Boolean(true);
if ((x || new Boolean(true)) !== x) {}
var x = new Boolean(true);
if ((x || new Boolean(false)) !== x) {}
var x = new Boolean(false);
if ((x || new Boolean(true)) !== x) {}
var x = new Boolean(false);
if ((x || new Boolean(false)) !== x) {}