var objWithPoisonedLengthToString = {
  "length": {
    toString: function () {},
    valueOf: null
  },
  "1": "A",
  "3": "B",
  "5": "C"
};
objWithPoisonedLengthToString[Symbol.isConcatSpreadable] = true;