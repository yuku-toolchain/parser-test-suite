if (2 > 1 !== true) {}
var x = 2;
if (x > 1 !== true) {}
var y = 1;
if (2 > y !== true) {}
var x = 2;
var y = 1;
if (x > y !== true) {}
var objectx = new Object();
var objecty = new Object();
objectx.prop = 2;
objecty.prop = 1;
if (objectx.prop > objecty.prop !== true) {}