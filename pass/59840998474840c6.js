var arrObj = [0, 1];
Object.defineProperty(arrObj, "length", {
  value: 1
});
var indexDeleted = !arrObj.hasOwnProperty("1");
arrObj.length = 10;