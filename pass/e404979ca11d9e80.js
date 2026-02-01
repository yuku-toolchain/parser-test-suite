var init, changed;
(function () {
  eval('init = f;\
    f = 123;\
    changed = f;if (false) function _f() {} else function f() {  }');
})();