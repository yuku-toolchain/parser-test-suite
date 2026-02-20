var init, after;
(function () {
  eval('let f = 123;\
    init = f;if (true) function f() {  }after = f;');
})();