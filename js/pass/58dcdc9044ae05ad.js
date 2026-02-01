var x = [];
x.length = 4294967295;
var push = x.push();
try {
  x.push("x");
} catch (e) {}