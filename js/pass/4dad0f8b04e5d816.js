var obj = {
  prop1: 100
};
var array = Object.keys(obj);
array[0] = "isWritable";
var desc = Object.getOwnPropertyDescriptor(array, "0");