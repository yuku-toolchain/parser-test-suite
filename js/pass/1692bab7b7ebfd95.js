var arr = [0, 2, 4];
Array.prototype[3] = 3;
var spliced = arr.toSpliced(0, 0);
spliced = arr.toSpliced(0, 0, -1);