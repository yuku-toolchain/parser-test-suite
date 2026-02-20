if ((true || false) !== true) {}
if ((false || true) !== true) {}
var x = new Boolean(false);
if ((x || true) !== x) {}
var y = new Boolean(true);
if ((false || y) !== y) {}
var x = new Boolean(false);
var y = new Boolean(true);
if ((x || y) !== x) {}
var x = false;
var y = new Boolean(true);
if ((x || y) !== y) {}
var objectx = new Object();
var objecty = new Object();
objectx.prop = false;
objecty.prop = 1.1;
if ((objectx.prop || objecty.prop) !== objecty.prop) {}
var objectx = new Object();
var objecty = new Object();
objectx.prop = 1.1;
objecty.prop = false;
if ((objectx.prop || objecty.prop) !== objectx.prop) {}