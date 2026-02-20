var coercibleKey1 = {
  get toString() {
    this.hint = "string";
  },
  get valueOf() {
    this.hint = "defaultOrNumber";
  }
};
var coercibleKey2 = {};
coercibleKey2[Symbol.toPrimitive] = function (hint) {
  this.hint = hint;
};