var init, after;
(function (f) {
  init = f;
  if (false) function _f() {} else function f() {}
  after = f;
})(123);