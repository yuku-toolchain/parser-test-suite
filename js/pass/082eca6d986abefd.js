var obj = {};
(function () {
  Function("a1,a2,a3", "this.shifted=a1.length+a2+a3;").call(obj, arguments, "", "2");
})("", 4, 2, "a");