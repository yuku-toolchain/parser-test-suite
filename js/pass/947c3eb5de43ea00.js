const baseSet = new Set(["a", "b", "c", "d", "e"]);
function mutatingIterator() {
  let index = 0;
  let values = ["x", "b", "b"];
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
  size: 3,
  get has() {
    baseSet.add("q");
    return function () {};
  },
  keys() {
    return mutatingIterator();
  }
};
const combined = baseSet.intersection(evilSetLike);
const expectedCombined = ["b"];
const expectedNewBase = ["a", "d", "e", "q", "b"];