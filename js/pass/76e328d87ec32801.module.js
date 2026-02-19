var err;
eval('{ function f() {} }');
try {
  f;
} catch (exception) {
  err = exception;
}