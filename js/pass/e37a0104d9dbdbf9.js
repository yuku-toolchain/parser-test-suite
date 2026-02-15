if ("1" % "1" !== 0) {}
if (new String("1") % "1" !== 0) {}
if ("1" % new String("1") !== 0) {}
if (new String("1") % new String("1") !== 0) {}
if (isNaN("x" % "1") !== true) {}
if (isNaN("1" % "x") !== true) {}