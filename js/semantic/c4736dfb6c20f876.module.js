(function () {
  try {
    throw {};
  } catch ({f}) {
    if (true) function f() {} else function _f() {}
  }
})();