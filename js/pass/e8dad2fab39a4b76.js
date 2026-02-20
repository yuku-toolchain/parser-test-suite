class MySet extends Set {}
const s1 = new MySet([1, 2]);
const s2 = new Set([2, 3]);
const expected = [2];
const combined = s1.intersection(s2);