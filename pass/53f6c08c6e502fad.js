if (parseFloat(-1.1) !== parseFloat("-1.1")) {}
if (parseFloat(Infinity) !== parseFloat("Infinity")) {}
if (String(parseFloat(NaN)) !== "NaN") {}
if (parseFloat(.01e+2) !== parseFloat(".01e+2")) {}
if (parseFloat(-0) !== 0) {} else {
  if (1 / parseFloat(-0) !== Number.POSITIVE_INFINITY) {}
}