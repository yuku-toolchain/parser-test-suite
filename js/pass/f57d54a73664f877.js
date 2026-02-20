if ("1" >> 1 !== 0) {}
if (1 >> "1" !== 0) {}
if (new String("1") >> 1 !== 0) {}
if (1 >> new String("1") !== 0) {}
if ("1" >> new Number(1) !== 0) {}
if (new Number(1) >> "1" !== 0) {}
if (new String("1") >> new Number(1) !== 0) {}
if (new Number(1) >> new String("1") !== 0) {}
if ("x" >> 1 !== 0) {}
if (1 >> "x" !== 1) {}