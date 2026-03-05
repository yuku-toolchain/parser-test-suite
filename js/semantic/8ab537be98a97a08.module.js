var init, after;
(function () {
  let f = 123;
  init = f;
  if (false) function _f() {} else function f() {}
  after = f;
})();