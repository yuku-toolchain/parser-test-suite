(function () {
  Function("a1,a2,a3", "this.shifted=a1+a2+a3;").apply(null, arguments);
})("", 1, 2);