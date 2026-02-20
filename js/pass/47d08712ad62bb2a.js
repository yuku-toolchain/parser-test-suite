var fns = {};
var obj = Object.create(null);
obj.a = 1;
obj.b = 1;
obj.c = 1;
for (let x in obj) {
  fns[x] = function () {
    return x;
  };
}