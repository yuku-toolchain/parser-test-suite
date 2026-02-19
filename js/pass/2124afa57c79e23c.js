var obj = {
  *foo(a = super.toString) {
    return a;
  }
};
obj.toString = null;