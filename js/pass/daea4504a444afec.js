var str = "Hello World!";
var regObj = new RegExp("World");
var result = false;
result = regObj.exec(str).toString() === "World";