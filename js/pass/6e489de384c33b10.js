if (parseFloat(new String("-1.1")) !== parseFloat("-1.1")) {}
if (parseFloat(new String("Infinity")) !== parseFloat("Infinity")) {}
if (String(parseFloat(new String("NaN"))) !== "NaN") {}
if (parseFloat(new String(".01e+2")) !== parseFloat(".01e+2")) {}
if (String(parseFloat(new String("false"))) !== "NaN") {}