function TestWithRegExpExec(exec) {
  RegExp.prototype.exec = exec;
  var regexp = /\w/g;
  var str = 'a*b';
}
TestWithRegExpExec(undefined);
TestWithRegExpExec(null);
TestWithRegExpExec(5);
TestWithRegExpExec(true);
TestWithRegExpExec(Symbol());