var values = [1, 2, 3];
var callCount = 0;
var obj = {
  method([...[...x]]) {
    callCount = callCount + 1;
  }
};
obj.method(values);