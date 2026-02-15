var init, after;
(function (f) {
  eval('init = f;if (false) ; else function f() {  }after = f;');
})(123);