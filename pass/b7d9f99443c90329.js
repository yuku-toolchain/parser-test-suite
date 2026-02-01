if ((1, 2) !== 2) {}
var x = 1;
if ((x, 2) !== 2) {}
var y = 2;
if ((1, y) !== 2) {}
var x = 1;
var y = 2;
if ((x, y) !== 2) {}
var x = 1;
if ((x, x) !== 1) {}
var objectx = new Object();
var objecty = new Object();
objectx.prop = true;
objecty.prop = 1.1;
if ((objectx.prop = false, objecty.prop) !== objecty.prop) {} else {
  if (objectx.prop !== false) {}
}