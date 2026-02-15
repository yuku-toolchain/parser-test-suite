if (("1" & 1) !== 1) {}
if ((1 & "1") !== 1) {}
if ((new String("1") & 1) !== 1) {}
if ((1 & new String("1")) !== 1) {}
if (("1" & new Number(1)) !== 1) {}
if ((new Number(1) & "1") !== 1) {}
if ((new String("1") & new Number(1)) !== 1) {}
if ((new Number(1) & new String("1")) !== 1) {}
if (("x" & 1) !== 0) {}
if ((1 & "x") !== 0) {}