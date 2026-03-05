var after;
(function () {
  if (false) function _f() {} else function f() {
    return 'declaration';
  }
  after = f;
})();