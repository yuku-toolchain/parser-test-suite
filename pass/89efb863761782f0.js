if (true + "1" !== "true1") {}
if ("1" + true !== "1true") {}
if (new Boolean(true) + "1" !== "true1") {}
if ("1" + new Boolean(true) !== "1true") {}
if (true + new String("1") !== "true1") {}
if (new String("1") + true !== "1true") {}
if (new Boolean(true) + new String("1") !== "true1") {}
if (new String("1") + new Boolean(true) !== "1true") {}