if ((true ? false : true) !== false) {}
var y = new Boolean(true);
if ((true ? y : false) !== y) {}
var y = new Boolean(false);
if ((y ? y : true) !== y) {}