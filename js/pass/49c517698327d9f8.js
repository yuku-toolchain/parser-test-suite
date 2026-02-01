var err = null;
try {
  eval("'use strict'; var public = 1; var anotherVariableNotReserveWord = 2;");
} catch (e) {
  err = e;
}