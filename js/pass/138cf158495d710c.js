if ("1" << "1" !== 2) {}
if (new String("1") << "1" !== 2) {}
if ("1" << new String("1") !== 2) {}
if (new String("1") << new String("1") !== 2) {}
if ("x" << "1" !== 0) {}
if ("1" << "x" !== 1) {}