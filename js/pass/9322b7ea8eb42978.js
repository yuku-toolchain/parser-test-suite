if (2 << 1 !== 4) {}
var x = 2;
if (x << 1 !== 4) {}
var y = 1;
if (2 << y !== 4) {}
var x = 2;
var y = 1;
if (x << y !== 4) {}
var objectx = new Object();
var objecty = new Object();
objectx.prop = 2;
objecty.prop = 1;
if (objectx.prop << objecty.prop !== 4) {}