var arr = (/\1(A)/).exec("AA");
if (arr === null || arr[0] !== "A") {}
if (arr === null || arr[1] !== "A") {}