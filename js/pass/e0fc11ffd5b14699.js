var args;
var replacer = function () {
  args = arguments;
};
(/b(.).(.)/)[Symbol.replace]('abcdef', replacer);