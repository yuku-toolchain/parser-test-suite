if ((1 | 0) !== 1) {}
var x = 1;
if ((x | 0) !== 1) {}
var y = 0;
if ((1 | y) !== 1) {}
var x = 1;
var y = 0;
if ((x | y) !== 1) {}
var objectx = new Object();
var objecty = new Object();
objectx.prop = 1;
objecty.prop = 0;
if ((objectx.prop | objecty.prop) !== 1) {}