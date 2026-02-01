var arr = [];
arr[10] = "10";
arr.length = 20;
var fromIndex = {
  valueOf: function () {
    delete arr[10];
    return 3;
  }
};