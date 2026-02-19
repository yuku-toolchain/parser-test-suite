var caught;
var obj = {
  method() {
    try {
      super[test262unresolvable];
    } catch (err) {
      caught = err;
    }
  }
};
obj.method();