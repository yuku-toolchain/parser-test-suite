if ((true ? false : true) !== false) {}
if ((false ? false : true) !== true) {}
var x = new Boolean(true);
var y = new Boolean(false);
if ((x ? y : true) !== y) {}
var z = new Boolean(true);
if ((false ? false : z) !== z) {}
var x = new Boolean(true);
var y = new Boolean(false);
var z = new Boolean(true);
if ((x ? y : z) !== y) {}
var x = false;
var y = new Boolean(false);
var z = new Boolean(true);
if ((x ? y : z) !== z) {}