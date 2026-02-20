var init, after;
(function () {
  eval('let f = 123;\
    init = f;if (false) function _f() {} else function f() {  }after = f;');
})();