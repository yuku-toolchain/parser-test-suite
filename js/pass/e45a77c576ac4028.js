if (1 * 1 !== 1) {}
var x = 1;
if (x * 1 !== 1) {}
var y = 1;
if (1 * y !== 1) {}
var x = 1;
var y = 1;
if (x * y !== 1) {}
var objectx = new Object();
var objecty = new Object();
objectx.prop = 1;
objecty.prop = 1;
if (objectx.prop * objecty.prop !== 1) {}