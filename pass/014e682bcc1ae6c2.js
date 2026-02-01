var evaluatedArg = false;
var obj = {
  method() {
    eval('super(evaluatedArg = true);');
  }
};