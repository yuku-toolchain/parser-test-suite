var init, after;
(function (f) {
  init = f;
  if (true) function f() {}
  after = f;
})(123);