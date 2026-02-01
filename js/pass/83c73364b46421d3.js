if (1 < 2 !== true) {}
var x = 1;
if (x < 2 !== true) {}
var y = 2;
if (1 < y !== true) {}
var x = 1;
var y = 2;
if (x < y !== true) {}
var objectx = new Object();
var objecty = new Object();
objectx.prop = 1;
objecty.prop = 2;
if (objectx.prop < objecty.prop !== true) {}