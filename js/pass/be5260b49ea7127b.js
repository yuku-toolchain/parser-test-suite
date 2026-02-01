var init, after;
(function (f) {
  eval('init = f;{ function f() {  } }after = f;');
})(123);