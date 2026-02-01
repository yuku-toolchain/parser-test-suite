const a = undefined;
let x = 1;
a?.[++x];
a?.b.c(++x).d;
undefined?.[++x];
undefined?.b.c(++x).d;