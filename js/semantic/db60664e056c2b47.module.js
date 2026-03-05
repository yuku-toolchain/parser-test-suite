var x = 1;
if (delete x !== false) {}
var y = 1;
if (delete this.y !== false) {}
function MyFunction() {}
if (delete MyFunction !== false) {}
var MyObject = new MyFunction();
if (delete MyObject !== false) {}