Promise.resolve(23).then(function (value) {
  if (value !== 23) {
    return;
  }
}, function () {});