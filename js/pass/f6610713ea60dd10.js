const baseSet = new Set(["a", "b", "c"]);
const evilSetLike = {
  size: 3,
  has(v) {
    if (v === "a") {
      baseSet.delete("c");
    }
    return ["x", "a", "b"].includes(v);
  },
  *keys() {}
};
const result = baseSet.isSubsetOf(evilSetLike);
const expectedNewBase = ["a", "b"];