var n = 0;
var obj = {
  toLocaleString: function () {
    n++;
  }
};
Array.prototype[1] = obj;
var x = [obj];
x.length = 2;
x.toLocaleString();
if (n !== 2) {}