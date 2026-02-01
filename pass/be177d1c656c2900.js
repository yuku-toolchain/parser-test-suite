var init, after;
(function () {
  let f = 123;
  init = f;
  {
    function f() {}
  }
  after = f;
})();