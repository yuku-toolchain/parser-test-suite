var lastValue;
var obj1 = {
  valueOf() {
    lastValue = "obj1";
    return 42;
  }
};
var obj2 = {
  valueOf() {
    lastValue = "obj2";
  }
};