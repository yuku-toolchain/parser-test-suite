try {
  throw null;
} catch (f) {
  if (false) function _f() {} else function f() {
    return 123;
  }
}