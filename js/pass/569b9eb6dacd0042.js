var init, after;
(function (f) {
  eval('init = f;if (false) function _f() {} else function f() {  }after = f;');
})(123);