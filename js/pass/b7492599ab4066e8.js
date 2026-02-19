var updated;
(function () {
  {
    function f() {
      return 'first declaration';
    }
  }
  {
    function f() {
      return 'second declaration';
    }
  }
  updated = f;
})();