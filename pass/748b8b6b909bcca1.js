if (true < "1" !== false) {}
if ("1" < true !== false) {}
if (new Boolean(true) < "1" !== false) {}
if ("1" < new Boolean(true) !== false) {}
if (true < new String("1") !== false) {}
if (new String("1") < true !== false) {}
if (new Boolean(true) < new String("1") !== false) {}
if (new String("1") < new Boolean(true) !== false) {}