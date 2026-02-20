class MySet extends Set {}
const s1 = new MySet([1, 2]);
const s2 = new Set([2, 3]);
const expected = [1, 2, 3];
const combined = s1.union(s2);