var iterDoneSpy = {};
var callCount = 0;
iterDoneSpy[Symbol.iterator] = function () {
  return {
    next: function () {
      return {
        value: null,
        done: false
      };
    },
    return: function () {
      callCount += 1;
    }
  };
};
Promise.resolve = function () {};
Promise.all(iterDoneSpy);