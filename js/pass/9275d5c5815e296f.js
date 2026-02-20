if ((1 ^ 1) !== 0) {}
var x = 1;
if ((x ^ 1) !== 0) {}
var y = 1;
if ((1 ^ y) !== 0) {}
var x = 1;
var y = 1;
if ((x ^ y) !== 0) {}
var objectx = new Object();
var objecty = new Object();
objectx.prop = 1;
objecty.prop = 1;
if ((objectx.prop ^ objecty.prop) !== 0) {}