var err;
eval('"use strict";{ function f() {} }');
try {
  f;
} catch (exception) {
  err = exception;
}