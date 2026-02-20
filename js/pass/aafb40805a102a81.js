var arr = [];
arr.length = 30;
var targetObj = function () {};
var fromIndex = {
  valueOf: function () {
    arr[4] = targetObj;
    return 11;
  }
};