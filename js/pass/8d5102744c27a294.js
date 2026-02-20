var obj = {
  prop: "abc"
};
Object.prototype.verifyThis = "verifyThis";
var func = function () {
  return new Boolean(arguments.length === 0 && Object.prototype.toString.call(this) === "[object Object]" && this.verifyThis === "verifyThis");
};
var NewFunc = Function.prototype.bind.call(func, obj);
var newInstance = new NewFunc();