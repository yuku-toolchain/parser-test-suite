var init, after;
(function (f) {
  init = f;
  if (true) function f() {} else function _f() {}
  after = f;
})(123);