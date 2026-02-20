if ((true && true) !== true) {}
if ((true && false) !== false) {}
var y = new Boolean(true);
if ((new Boolean(true) && y) !== y) {}
var y = new Boolean(false);
if ((new Boolean(true) && y) !== y) {}
var y = new Boolean(true);
if ((new Boolean(false) && y) !== y) {}
var y = new Boolean(false);
if ((new Boolean(false) && y) !== y) {}