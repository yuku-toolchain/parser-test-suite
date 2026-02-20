x = 1;
if (x !== 1) {}
var x = 1;
if (x !== 1) {}
y = 1;
x = y;
if (x !== 1) {}
var y = 1;
var x = y;
if (x !== 1) {}
var objectx = new Object();
var objecty = new Object();
objecty.prop = 1.1;
objectx.prop = objecty.prop;
if (objectx.prop !== objecty.prop) {} else {
  if (objectx === objecty) {}
}