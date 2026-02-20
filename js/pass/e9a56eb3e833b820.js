var arr = (/\1(A)(B)\2/).exec("ABB");
if (arr === null || arr[0] !== "ABB") {}
if (arr === null || arr[1] !== "A") {}
if (arr === null || arr[2] !== "B") {}