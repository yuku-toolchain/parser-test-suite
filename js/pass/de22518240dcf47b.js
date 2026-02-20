var foo = function () {};
var obj = foo.bind({});
Function.prototype.property = 3;
obj.property = 12;