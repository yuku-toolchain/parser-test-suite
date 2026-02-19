var value1 = {};
var value2 = {};
var value3 = {};
var arg1, arg2, arg3;
var obj = {
  *method(a, b, c) {
    arg1 = a;
    arg2 = b;
    arg3 = c;
  }
};
obj.method(value1, value2, value3).next();