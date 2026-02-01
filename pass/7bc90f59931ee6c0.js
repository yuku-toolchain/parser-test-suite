var obj = {
  length: 5
};
obj[Symbol.isConcatSpreadable] = true;
obj.length = 4000;