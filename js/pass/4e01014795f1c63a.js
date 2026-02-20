var unscopables = Array.prototype[Symbol.unscopables];
for (const unscopable of ["toReversed", "toSorted", "toSpliced"]) {}