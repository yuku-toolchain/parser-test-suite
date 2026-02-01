var init, changed;
(function () {
  init = f;
  f = 123;
  changed = f;
  if (true) function f() {}
})();