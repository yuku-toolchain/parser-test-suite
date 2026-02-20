if ("1" >>> null !== 1) {}
if (null >>> "1" !== 0) {}
if (new String("1") >>> null !== 1) {}
if (null >>> new String("1") !== 0) {}