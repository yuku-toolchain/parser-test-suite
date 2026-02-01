if ("1" < "1" !== false) {}
if (new String("1") < "1" !== false) {}
if ("1" < new String("1") !== false) {}
if (new String("1") < new String("1") !== false) {}
if ("x" < "1" !== false) {}
if ("1" < "x" !== true) {}