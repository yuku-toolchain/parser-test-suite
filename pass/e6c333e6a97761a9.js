var obj = {
  "1": "A",
  "3": "B",
  "5": "C"
};
obj[Symbol.isConcatSpreadable] = true;
obj.length = {
  toString: function () {
    return "SIX";
  },
  valueOf: null
};
obj.length = {
  toString: null,
  valueOf: function () {
    return "SIX";
  }
};