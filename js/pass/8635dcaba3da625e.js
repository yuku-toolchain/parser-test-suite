var arr = [1, 2, 3];
arr.value = "ArrValue";
var newObj = Object.create({}, {
  prop: arr
});