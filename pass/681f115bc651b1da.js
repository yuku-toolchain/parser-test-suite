var spreadableHasPoisonedIndex = {
  length: Number.MAX_SAFE_INTEGER,
  get 0() {}
};
spreadableHasPoisonedIndex[Symbol.isConcatSpreadable] = true;