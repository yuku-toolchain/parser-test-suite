if ("1" > null !== true) {}
if (null > "1" !== false) {}
if (new String("1") > null !== true) {}
if (null > new String("1") !== false) {}