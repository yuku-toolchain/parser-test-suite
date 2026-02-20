var spreadablePoisonedGetter = {};
Object.defineProperty(spreadablePoisonedGetter, Symbol.isConcatSpreadable, {
  get: function () {}
});