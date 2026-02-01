var spreadablePoisonedLengthGetter = {};
spreadablePoisonedLengthGetter[Symbol.isConcatSpreadable] = true;
Object.defineProperty(spreadablePoisonedLengthGetter, "length", {
  get: function () {}
});