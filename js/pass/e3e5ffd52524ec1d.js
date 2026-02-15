var obj = {
  prop1: 100
};
var array = Object.keys(obj);
var desc = Object.getOwnPropertyDescriptor(array, "0");
delete array[0];