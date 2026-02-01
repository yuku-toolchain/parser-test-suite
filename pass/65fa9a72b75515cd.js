var calls = [];
var descConstructor = {
  get: function () {
    calls.push("constructor");
    return Array;
  },
  configurable: true
};
var descSpreadable = {
  get: function () {
    calls.push("isConcatSpreadable");
  },
  configurable: true
};
var arr1 = [];
Object.defineProperty(arr1, "constructor", descConstructor);
Object.defineProperty(arr1, Symbol.isConcatSpreadable, descSpreadable);
calls = [];
var arr2 = [];
var arg = {};
Object.defineProperty(arr2, "constructor", descConstructor);
Object.defineProperty(arg, Symbol.isConcatSpreadable, descSpreadable);