var err1, err2;
(function () {
  try {
    f;
  } catch (exception) {
    err1 = exception;
  }
  {
    function f() {}
  }
  try {
    f;
  } catch (exception) {
    err2 = exception;
  }
})();