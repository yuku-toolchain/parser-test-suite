var init, after;
(function (f = 123) {
  init = f;
  if (true) function f() {} else function _f() {}
  after = f;
})();