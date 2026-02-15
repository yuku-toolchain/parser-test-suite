if ("1" / null !== Number.POSITIVE_INFINITY) {}
if (null / "1" !== 0) {}
if (new String("1") / null !== Number.POSITIVE_INFINITY) {}
if (null / new String("1") !== 0) {}