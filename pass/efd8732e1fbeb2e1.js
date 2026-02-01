if (-4 >>> 1 !== 2147483646) {}
var x = -4;
if (x >>> 1 !== 2147483646) {}
var y = 1;
if (-4 >>> y !== 2147483646) {}
var x = -4;
var y = 1;
if (x >>> y !== 2147483646) {}
var objectx = new Object();
var objecty = new Object();
objectx.prop = -4;
objecty.prop = 1;
if (objectx.prop >>> objecty.prop !== 2147483646) {}