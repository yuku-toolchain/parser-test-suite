var x = 0;
var y = 0;
var z = 0;
if ((x = 1, y = 2, z = 3) !== 3) {}
var x = 0;
var y = 0;
var z = 0;
(x = 1, y = 2, z = 3);
if (x !== 1) {}
if (y !== 2) {}
if (z !== 3) {}