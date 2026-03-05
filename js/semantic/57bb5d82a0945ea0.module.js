var init, after;
(function () {
  let f = 123;
  init = f;
  if (true) function f() {} else function _f() {}
  after = f;
})();