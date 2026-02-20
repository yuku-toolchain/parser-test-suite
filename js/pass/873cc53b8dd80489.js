var MyFunction = new Function("this.THIS = this");
var MyObject = new MyFunction();
if (MyObject.THIS.toString() !== "[object Object]") {}
MyFunction = new Function("this.THIS = eval(\'this\')");
MyObject = new MyFunction();
if (MyObject.THIS.toString() !== "[object Object]") {}