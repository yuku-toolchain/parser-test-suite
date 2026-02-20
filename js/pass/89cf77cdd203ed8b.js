const baseSet = new Set(["a", "b", "c", "d", "e"]);
function mutatingIterator() {
  let index = 0;
  let values = ["x", "b", "c", "c"];
  return {
    next() {
      if (index === 0) {
        baseSet.delete("b");
        baseSet.delete("c");
        baseSet.add("b");
        baseSet.add("d");
      }
      return {
        done: index >= values.length,
        value: values[index++]
      };
    }
  };
}
const evilSetLike = {
  size: 4,
  get has() {
    baseSet.add("q");
    return function () {};
  },
  keys() {
    return mutatingIterator();
  }
};
const combined = baseSet.symmetricDifference(evilSetLike);
const expectedCombined = ["a", "c", "d", "e", "q", "x"];
const expectedNewBase = ["a", "d", "e", "q", "b"];