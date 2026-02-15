if (parseFloat("-11string") !== -11) {}
if (parseFloat("01string") !== 1) {}
if (parseFloat("-11e-1string") !== -1.1) {}
if (parseFloat("01e1string") !== 10) {}
if (parseFloat("001string") !== 1) {}
if (parseFloat("1e001string") !== 10) {}
if (parseFloat("010string") !== 10) {}