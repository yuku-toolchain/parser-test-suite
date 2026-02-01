var after;
(function () {
  switch (1) {
    default:
      function f() {
        return 'function declaration';
      }
  }
  after = f;
  var f = 123;
})();