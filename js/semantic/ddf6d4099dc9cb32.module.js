var updated;
(function () {
  {
    function f() {
      return 'first declaration';
    }
  }
  if (false) function _f() {} else function f() {
    return 'second declaration';
  }
  updated = f;
})();