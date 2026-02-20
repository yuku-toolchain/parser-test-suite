if (1 % 2 !== 1) {}
var x = 1;
if (x % 2 !== 1) {}
var y = 2;
if (1 % y !== 1) {}
var x = 1;
var y = 2;
if (x % y !== 1) {}
var objectx = new Object();
var objecty = new Object();
objectx.prop = 1;
objecty.prop = 2;
if (objectx.prop % objecty.prop !== 1) {}