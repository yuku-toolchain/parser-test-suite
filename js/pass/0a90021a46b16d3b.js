const s1 = new Set([1, 2]);
const s2 = new Set([-1, 0, 3]);
const expected = [1, 2, -1, 0, 3];
const combined = s1.union(s2);
const s3 = new Set([1, 2, -3]);
const s4 = new Set([-1, 0]);
const expected2 = [1, 2, -3, -1, 0];
const combined2 = s3.union(s4);