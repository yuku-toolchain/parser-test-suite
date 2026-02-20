var init, changed;
(function () {
  eval('init = f;\
    f = 123;\
    changed = f;if (false) ; else function f() {  }');
})();