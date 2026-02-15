var thisVal;
var replacer = function () {
  thisVal = this;
};
(/./)[Symbol.replace]('x', replacer);