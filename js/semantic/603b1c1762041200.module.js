var updated;
(function () {
  {
    function f() {
      return 'first declaration';
    }
  }
  if (true) function f() {
    return 'second declaration';
  } else function _f() {}
  updated = f;
})();