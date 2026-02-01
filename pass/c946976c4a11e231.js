const s1 = new Set([1, 2]);
const m1 = new Map([[2, "two"], [3, "three"]]);
const expected = [2];
const combined = s1.intersection(m1);