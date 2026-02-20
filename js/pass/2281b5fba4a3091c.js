if ("1" >= 1 !== true) {}
if (1 >= "1" !== true) {}
if (new String("1") >= 1 !== true) {}
if (1 >= new String("1") !== true) {}
if ("1" >= new Number(1) !== true) {}
if (new Number(1) >= "1" !== true) {}
if (new String("1") >= new Number(1) !== true) {}
if (new Number(1) >= new String("1") !== true) {}
if ("x" >= 1 !== false) {}
if (1 >= "x" !== false) {}