if ((false && true) !== false) {}
if ((true && false) !== false) {}
var x = false;
if ((x && true) !== false) {}
var y = new Boolean(false);
if ((true && y) !== y) {}
var x = false;
var y = true;
if ((x && y) !== false) {}
var x = true;
var y = new Boolean(false);
if ((x && y) !== y) {}
var objectx = new Object();
var objecty = new Object();
objectx.prop = true;
objecty.prop = 1.1;
if ((objectx.prop && objecty.prop) !== objecty.prop) {}
var objectx = new Object();
var objecty = new Object();
objectx.prop = 0;
objecty.prop = true;
if ((objectx.prop && objecty.prop) !== objectx.prop) {}