var iterable = {};
var firstIterResult;
iterable[Symbol.iterator] = function () {
  var finalIterResult = {
    value: null,
    done: true
  };
  var nextIterResult = firstIterResult;
  return {
    next: function () {
      var iterResult = nextIterResult;
      nextIterResult = finalIterResult;
      return iterResult;
    }
  };
};
firstIterResult = true;
firstIterResult = false;
firstIterResult = 'string';
firstIterResult = undefined;
firstIterResult = null;
firstIterResult = 4;
firstIterResult = NaN;
firstIterResult = Symbol('s');
firstIterResult = /regexp/;
for (var x of iterable) {}
firstIterResult = {};
for (var x of iterable) {}
firstIterResult = new Proxy({}, {
  get: function (receiver, name) {
    if (name === 'done') {
      return true;
    }
    if (name === 'value') {
      return null;
    }
  }
});
for (var x of iterable) {}
firstIterResult = new Proxy({}, {
  get: function (receiver, name) {
    if (name === 'done') {
      return false;
    }
    if (name === 'value') {
      return 23;
    }
  }
});
var i = 0;
for (var x of iterable) {
  i++;
}