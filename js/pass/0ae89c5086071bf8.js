if (("MAX_VALUE" in Number) !== true) {}
var x = "MAX_VALUE";
if ((x in Number) !== true) {}
var y = Number;
if (("MAX_VALUE" in y) !== true) {}
var x = "MAX_VALUE";
var y = Number;
if ((x in y) !== true) {}