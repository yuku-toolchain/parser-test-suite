var after;
(function () {
  if (true) function f() {
    return 'inner declaration';
  }
  after = f;
  function f() {
    return 'outer declaration';
  }
})();