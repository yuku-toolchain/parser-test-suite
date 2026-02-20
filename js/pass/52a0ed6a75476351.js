var obj;
var obj = {
  *foo() {
    return super.toString;
  }
};
obj.toString = null;