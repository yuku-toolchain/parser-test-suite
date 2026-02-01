var after;
(function () {
  if (true) function f() {
    return 'declaration';
  } else function _f() {}
  after = f;
})();