const s1 = new Set([1, 2]);
const m1 = new Map([[2, "two"], [3, "three"]]);
const expected = [1, 3];
const combined = s1.symmetricDifference(m1);