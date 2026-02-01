if (true / "1" !== 1) {}
if ("1" / true !== 1) {}
if (new Boolean(true) / "1" !== 1) {}
if ("1" / new Boolean(true) !== 1) {}
if (true / new String("1") !== 1) {}
if (new String("1") / true !== 1) {}
if (new Boolean(true) / new String("1") !== 1) {}
if (new String("1") / new Boolean(true) !== 1) {}