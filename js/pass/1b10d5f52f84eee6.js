var init, after;
(function (f) {
  eval('init = f;if (true) function f() {  } else function _f() {}after = f;');
})(123);