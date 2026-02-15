if (parseFloat("0x") !== 0) {}
if (parseFloat("11x") !== 11) {}
if (parseFloat("11s1") !== 11) {}
if (parseFloat("11.s1") !== 11) {}
if (parseFloat(".0s1") !== 0) {}
if (parseFloat("1.s1") !== 1) {}
if (parseFloat("1..1") !== 1) {}
if (parseFloat("0.1.1") !== 0.1) {}
if (parseFloat("0. 1") !== 0) {}