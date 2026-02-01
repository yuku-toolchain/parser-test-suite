if ("1" / "1" !== 1) {}
if (new String("1") / "1" !== 1) {}
if ("1" / new String("1") !== 1) {}
if (new String("1") / new String("1") !== 1) {}
if (isNaN("x" / "1") !== true) {}
if (isNaN("1" / "x") !== true) {}