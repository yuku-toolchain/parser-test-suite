if (("-1" || "1") !== "-1") {}
if (("-1" || "x") !== "-1") {}
var x = new String("-1");
if ((x || new String(-1)) !== x) {}
var x = new String(NaN);
if ((x || new String("1")) !== x) {}
var x = new String("-x");
if ((x || new String("x")) !== x) {}
var x = new String(0);
if ((x || new String(NaN)) !== x) {}