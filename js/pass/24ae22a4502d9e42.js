var caught;
var obj = {
  method() {
    try {
      super['x'];
    } catch (err) {
      caught = err;
    }
  }
};
Object.setPrototypeOf(obj, null);
obj.method();