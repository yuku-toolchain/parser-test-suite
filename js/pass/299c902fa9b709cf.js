var obj = {
  method() {
    return super.toString;
  }
};
obj.toString = null;