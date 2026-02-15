var obj = {};
(function () {
  Function("a1,a2,a3", "this.shifted=a1+a2+a3;").apply(obj, arguments);
})("", 4, 2);