var init, after;
(function (f = 123) {
  init = f;
  switch (1) {
    default:
      function f() {}
  }
  after = f;
})();