const number = 9007199254740991;
const bigint = 9007199254740991n;
const s = new Set([number, bigint]);
s.delete(number);
s.delete(bigint);
s.add(number);
s.add(bigint);