var __ROBOT = "C3PO";
function __FUNC() {
  function __GUNC() {
    return arguments[0];
  }
  function __HUNC() {
    return __GUNC;
  }
  return __HUNC;
}
if (__FUNC()()(__ROBOT) !== __ROBOT) {}