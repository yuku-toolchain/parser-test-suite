var arr = (/(A)\1/).exec("AA");
if (arr === null || arr[0] !== "AA") {}
if (arr === null || arr[1] !== "A") {}