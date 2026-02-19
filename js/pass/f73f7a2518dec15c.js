if (true - "1" !== 0) {}
if ("1" - true !== 0) {}
if (new Boolean(true) - "1" !== 0) {}
if ("1" - new Boolean(true) !== 0) {}
if (true - new String("1") !== 0) {}
if (new String("1") - true !== 0) {}
if (new Boolean(true) - new String("1") !== 0) {}
if (new String("1") - new Boolean(true) !== 0) {}