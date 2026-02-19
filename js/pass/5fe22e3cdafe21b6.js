var arr = (/(A)\1(B)\2/).exec("AABB");
if (arr === null || arr[0] !== "AABB") {}
if (arr === null || arr[1] !== "A") {}
if (arr === null || arr[2] !== "B") {}