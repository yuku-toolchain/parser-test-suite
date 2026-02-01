if (("0" && "-1") !== "-1") {}
if (("-1" && "x") !== "x") {}
var y = new String(-1);
if ((new String("-1") && y) !== y) {}
var y = new String(NaN);
if ((new String("0") && y) !== y) {}
var y = new String("-x");
if ((new String("x") && y) !== y) {}
var y = new String(-1);
if ((new String(NaN) && y) !== y) {}