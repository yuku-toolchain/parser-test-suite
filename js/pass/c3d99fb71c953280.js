if (true >= "1" !== true) {}
if ("1" >= true !== true) {}
if (new Boolean(true) >= "1" !== true) {}
if ("1" >= new Boolean(true) !== true) {}
if (true >= new String("1") !== true) {}
if (new String("1") >= true !== true) {}
if (new Boolean(true) >= new String("1") !== true) {}
if (new String("1") >= new Boolean(true) !== true) {}