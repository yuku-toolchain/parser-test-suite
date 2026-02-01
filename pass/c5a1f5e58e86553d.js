const number = 9007199254740991;
const bigint = 9007199254740991n;
const m = new Map([[number, number], [bigint, bigint]]);
m.delete(number);
m.delete(bigint);
m.set(number, number);
m.set(bigint, bigint);