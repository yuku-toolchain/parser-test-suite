var init, changed;
(function () {
  init = f;
  f = 123;
  changed = f;
  if (false) function _f() {} else function f() {}
})();