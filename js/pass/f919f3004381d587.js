var obj = {
  get m() {
    return 1234;
  }
};
var desc = Object.getOwnPropertyDescriptor(obj, 'm');