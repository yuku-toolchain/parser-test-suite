var updated;
(function () {
  {
    function f() {
      return 'first declaration';
    }
  }
  if (true) function f() {
    return 'second declaration';
  }
  updated = f;
})();