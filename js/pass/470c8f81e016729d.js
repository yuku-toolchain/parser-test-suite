(function () {
  try {
    throw {};
  } catch ({f}) {
    if (false) function _f() {} else function f() {}
  }
})();