var value = {};
Promise.resolve(value).then(function (value) {
  if (value !== value) {
    return;
  }
}, function () {});