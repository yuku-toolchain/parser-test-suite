var after;
(function () {
  {
    function f() {
      return 'function declaration';
    }
  }
  after = f;
  var f = 123;
})();