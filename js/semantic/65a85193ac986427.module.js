(function () {
  for (let f in {
    key: 0
  }) {
    if (true) function f() {} else function _f() {}
  }
})();