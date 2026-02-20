if (isNaN("1" % null) !== true) {}
if (null % "1" !== 0) {}
if (isNaN(new String("1") % null) !== true) {}
if (null % new String("1") !== 0) {}