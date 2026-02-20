var objWithPoisonedLengthValueOf = {
  "length": {
    valueOf: function () {},
    toString: null
  },
  "1": "A",
  "3": "B",
  "5": "C"
};
objWithPoisonedLengthValueOf[Symbol.isConcatSpreadable] = true;