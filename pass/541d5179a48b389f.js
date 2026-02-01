if (parseFloat("1ex") !== 1) {}
if (parseFloat("1e-x") !== 1) {}
if (parseFloat("1e1x") !== 10) {}
if (parseFloat("1e-1x") !== 0.1) {}
if (parseFloat("0.1e-1x") !== 0.01) {}