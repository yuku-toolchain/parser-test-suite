var thisVal = null;
var replacer = function () {
  thisVal = this;
};
(/./)[Symbol.replace]('x', replacer);