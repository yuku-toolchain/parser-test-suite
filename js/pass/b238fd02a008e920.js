var target = [7, 8, 9];
var result = Object.assign(target, [1]);
var sparseArraySource = [];
sparseArraySource[2] = 3;
result = Object.assign(target, sparseArraySource);
var shortObjectSource = {
  1: 2,
  length: 2
};
shortObjectSource["-0"] = -1;
shortObjectSource["1.5"] = -2;
shortObjectSource["4294967295"] = -3;
result = Object.assign(target, shortObjectSource);
result = Object.assign(target, {
  length: 1
});
result = Object.assign(target, {
  2: 0
});
if (typeof Proxy !== 'undefined') {
  var accordionSource = new Proxy({
    length: 0,
    1: 9
  }, {
    ownKeys: function () {
      return ["length", "1"];
    }
  });
  result = Object.assign(target, accordionSource);
}