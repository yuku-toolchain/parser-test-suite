var callCount = 0;
var target = {};
var result;
var source = new Proxy({}, {
  ownKeys: function () {
    callCount += 1;
    return ['missing'];
  }
});
result = Object.assign(target, source);