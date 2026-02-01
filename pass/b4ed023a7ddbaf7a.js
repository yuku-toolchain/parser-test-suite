var callCount = 0;
var obj = {
  *method() {
    callCount++;
  }
};
obj.method().next();