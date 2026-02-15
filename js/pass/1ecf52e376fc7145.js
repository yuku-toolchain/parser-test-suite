var init, after;
(function (f) {
  eval('init = f;if (true) function f() {  } else ;after = f;');
})(123);