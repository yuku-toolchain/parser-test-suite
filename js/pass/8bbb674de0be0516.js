var obj = {
  "length": -4294967294,
  "1": "A",
  "3": "B",
  "5": "C"
};
obj[Symbol.isConcatSpreadable] = true;
obj.length = -4294967294;
obj.length = "-4294967294";