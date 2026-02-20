if (-4 >> 1 !== -2) {}
var x = -4;
if (x >> 1 !== -2) {}
var y = 1;
if (-4 >> y !== -2) {}
var x = -4;
var y = 1;
if (x >> y !== -2) {}
var objectx = new Object();
var objecty = new Object();
objectx.prop = -4;
objecty.prop = 1;
if (objectx.prop >> objecty.prop !== -2) {}