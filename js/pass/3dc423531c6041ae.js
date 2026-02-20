if ("1" + null !== "1null") {}
if (null + "1" !== "null1") {}
if (new String("1") + null !== "1null") {}
if (null + new String("1") !== "null1") {}