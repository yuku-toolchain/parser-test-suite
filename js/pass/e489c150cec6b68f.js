var init, after;
(function (f) {
  eval('init = f;if (true) function f() {  }after = f;');
})(123);