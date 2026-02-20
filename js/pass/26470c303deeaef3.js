if (parseFloat("\u00091.1") !== parseFloat("1.1")) {}
if (parseFloat("\u0009\u0009-1.1") !== parseFloat("-1.1")) {}
if (parseFloat("	1.1") !== parseFloat("1.1")) {}
if (parseFloat("			1.1") !== parseFloat("1.1")) {}
if (parseFloat("			\u0009			\u0009-1.1") !== parseFloat("-1.1")) {}