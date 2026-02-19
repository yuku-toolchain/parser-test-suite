var oldArray = Array;
Array = function () {
  throw new Error("invoke customer defined Array!");
};
var obj = {};
var result = Object.getOwnPropertyNames(obj);