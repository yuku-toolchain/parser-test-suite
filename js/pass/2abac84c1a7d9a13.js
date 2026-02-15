var obj = {
  set m(x) {
    return x;
  }
};
var desc = Object.getOwnPropertyDescriptor(obj, 'm');