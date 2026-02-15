var init, changed;
(function () {
  init = f;
  f = 123;
  changed = f;
  {
    function f() {}
  }
})();