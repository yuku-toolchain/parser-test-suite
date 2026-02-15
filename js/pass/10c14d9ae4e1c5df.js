if (1 != 1 !== false) {}
var x = 1;
if (x != 1 !== false) {}
var y = 1;
if (1 != y !== false) {}
var x = 1;
var y = 1;
if (x != y !== false) {}
var objectx = new Object();
var objecty = new Object();
objectx.prop = 1;
objecty.prop = 1;
if (objectx.prop != objecty.prop !== false) {}