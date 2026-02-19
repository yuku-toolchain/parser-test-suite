const baseSet = new Set(["a", "b", "c"]);
const evilSetLike = {
  size: 3,
  has(v) {
    if (v === "a") {
      baseSet.delete("b");
      baseSet.delete("c");
      baseSet.add("b");
      return false;
    }
    if (v === "b") {
      return false;
    }
    if (v === "c") {}
  },
  *keys() {}
};
const result = baseSet.isDisjointFrom(evilSetLike);
const expectedNewBase = ["a", "b"];