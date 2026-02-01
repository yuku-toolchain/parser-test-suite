var caught;
var obj = {
  method() {
    super.x = 8;
    Object.freeze(obj);
    try {
      super.y = 9;
    } catch (err) {
      caught = err;
    }
  }
};
obj.method();