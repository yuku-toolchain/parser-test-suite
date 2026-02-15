var array = [2, 4, 16];
var obj = {
  length: 4,
  0: 2,
  1: 4,
  3: 16
};
var a = Array.from.call(Object, obj);
for (var j = 0; j < a.length; j++) {}