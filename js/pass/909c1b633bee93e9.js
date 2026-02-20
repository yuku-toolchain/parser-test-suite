if ("1" + "1" !== "11") {}
if (new String("1") + "1" !== "11") {}
if ("1" + new String("1") !== "11") {}
if (new String("1") + new String("1") !== "11") {}
if ("x" + "1" !== "x1") {}
if ("1" + "x" !== "1x") {}