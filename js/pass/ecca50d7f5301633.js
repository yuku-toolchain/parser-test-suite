var obj = {
  method(x = super.toString) {
    return x;
  }
};
obj.toString = null;