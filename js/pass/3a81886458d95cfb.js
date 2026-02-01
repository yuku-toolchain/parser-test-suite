var callCount = 0;
var obj = {
  *method([arrow = () => {}] = []) {
    callCount = callCount + 1;
  }
};
obj.method().next();