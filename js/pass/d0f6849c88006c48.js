if (true << "1" !== 2) {}
if ("1" << true !== 2) {}
if (new Boolean(true) << "1" !== 2) {}
if ("1" << new Boolean(true) !== 2) {}
if (true << new String("1") !== 2) {}
if (new String("1") << true !== 2) {}
if (new Boolean(true) << new String("1") !== 2) {}
if (new String("1") << new Boolean(true) !== 2) {}