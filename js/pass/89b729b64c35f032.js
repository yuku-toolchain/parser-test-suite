var init, changed;
(function () {
  eval('init = f;\
    f = 123;\
    changed = f;if (true) function f() {  } else function _f() {}');
})();