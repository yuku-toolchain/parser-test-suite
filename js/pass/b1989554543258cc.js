var arr = {
  10: false,
  length: 30
};
var fromIndex = {
  valueOf: function () {
    delete arr[10];
    return 3;
  }
};