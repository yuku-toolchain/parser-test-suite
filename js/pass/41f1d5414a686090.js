var init, after;
(function () {
  eval('let f = 123;\
    init = f;if (false) ; else function f() {  }after = f;');
})();