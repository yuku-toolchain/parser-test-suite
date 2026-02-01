var targetObj = this;
var obj = {
  1: targetObj,
  2: 2,
  length: {
    toString: function () {
      return '2';
    }
  }
};