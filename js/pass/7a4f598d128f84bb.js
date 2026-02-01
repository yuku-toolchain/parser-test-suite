var after;
(function () {
  if (true) function f() {
    return 'declaration';
  }
  after = f;
})();