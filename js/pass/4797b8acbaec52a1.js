var init, after;
(function (f = 123) {
  init = f;
  {
    function f() {}
  }
  after = f;
})();