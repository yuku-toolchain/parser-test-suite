var iterable = {};
var i, firstIterResult;
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
firstIterResult = {
  value: 45,
  done: false
};
i = 0;
for (var x of iterable) {
  i++;
}
firstIterResult = {
  done: false
};
Object.defineProperty(firstIterResult, 'value', {
  get: function () {
    return 23;
  }
});
i = 0;
for (var x of iterable) {
  i++;
}