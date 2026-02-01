if (parseFloat("\u00201.1") !== parseFloat("1.1")) {}
if (parseFloat("\u0020\u0020-1.1") !== parseFloat("-1.1")) {}
if (parseFloat(" 1.1") !== parseFloat("1.1")) {}
if (parseFloat("       1.1") !== parseFloat("1.1")) {}
if (parseFloat("       \u0020       \u0020-1.1") !== parseFloat("-1.1")) {}