var after;
(function () {
  {
    function f() {
      return 'inner declaration';
    }
  }
  after = f;
  function f() {
    return 'outer declaration';
  }
})();