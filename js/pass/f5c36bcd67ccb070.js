var items = {};
items[Symbol.iterator] = function () {
  return {
    next: function () {}
  };
};