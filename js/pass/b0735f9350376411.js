(function () {
  Function("a1,a2,a3", "this.shifted=a1.length+a2+a3;").call(null, arguments, "", 2);
})("", 1, 2, true);