var obj = {
  method() {
    super['x'] = 8;
    Object.freeze(obj);
    super['y'] = 9;
  }
};
obj.method();