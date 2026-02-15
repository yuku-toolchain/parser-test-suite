const baseSet = new Set(["a", "b", "c"]);
const evilSetLike = {
  size: 3,
  has(v) {},
  *keys() {
    yield "a";
    baseSet.delete("b");
    baseSet.delete("c");
    baseSet.add("b");
    yield "b";
  }
};
const result = baseSet.isSupersetOf(evilSetLike);
const expectedNewBase = ["a", "b"];