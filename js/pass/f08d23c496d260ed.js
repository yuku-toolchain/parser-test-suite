if (parseFloat(new Number(-1.1)) !== parseFloat("-1.1")) {}
if (parseFloat(new Number(Infinity)) !== parseFloat("Infinity")) {}
if (String(parseFloat(new Number(NaN))) !== "NaN") {}
if (parseFloat(new Number(.01e+2)) !== parseFloat(".01e+2")) {}