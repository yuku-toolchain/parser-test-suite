const baseSet = new Set(["a", "b", "c", "d", "e"]);
function mutatingIterator() {
  let index = 0;
  let values = ["x", "y"];
  return {
    next() {
      baseSet.delete("b");
      baseSet.delete("c");
      baseSet.add("b");
      baseSet.add("d");
      return {
        done: index >= 2,
        value: values[index++]
      };
    }
  };
}
const evilSetLike = {
  size: 2,
  get has() {
    baseSet.add("q");
    return function () {};
  },
  keys() {
    return mutatingIterator();
  }
};
const combined = baseSet.union(evilSetLike);
const expectedCombined = ["a", "b", "c", "d", "e", "q", "x", "y"];
const expectedNewBase = ["a", "d", "e", "q", "b"];